import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Contract } from "../domain/Contract";
import { InMemoryContracts } from "../domain/InMemoryContracts";
import { ContractsProducer } from "./ContractsProducer";
import { CreateContractRequest } from "./CreateContractRequest";

@Controller()
export class ContractsController {
  constructor(
    private readonly contracts: InMemoryContracts,
    private readonly contractsProducer: ContractsProducer
  ) {}

  @Post()
  async createContract(@Body() body: CreateContractRequest) {
    const contract = Contract.create(body);
    await this.contracts.add(contract);
  }

  @Get(":customerRef")
  async listContractsByCustomer(@Param("customerRef") customerRef: string) {
    return await this.contracts.listByCustomerRef(customerRef)
      .then(res => res.map(c => ({
        id: c.id,
        status: c.status,
        customerRef: c.customerRef,
        signedAt: c.signedAt })));
  }

  @Put(":contractId/activate")
  async activateContract(@Param("contractId") contractId: string) {
    const contract = await this.contracts.findById(contractId);
    if (contract !== undefined) {
      await this.contracts.save(contract.activate());
      this.contractsProducer.publish({
        contractId: contract.id, 
        customerRef: contract.customerRef,
        signedAt: contract.signedAt });
    }
  }
}