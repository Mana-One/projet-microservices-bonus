import { Contract } from "./Contract";

export class InMemoryContracts {
  private data: Map<string, Contract> = new Map();
  private dataByCustomerRef: Map<string, Contract[]> = new Map();

  async add(contract: Contract): Promise<void> {
    this.data.set(contract.id, contract);
    if (!this.dataByCustomerRef.has(contract.customerRef)) {
      this.dataByCustomerRef.set(contract.customerRef, [contract]);
    } else {
      this.dataByCustomerRef.get(contract.customerRef)!.push(contract);
    }
  }

  async listByCustomerRef(customerRef: string): Promise<Contract[]> {
    return this.dataByCustomerRef.get(customerRef) || [];
  }

  async findById(contractId: string): Promise<Contract | undefined> {
    return this.data.get(contractId);
  }

  async save(contract: Contract): Promise<void> {
    this.data.set(contract.id, contract);
    const byCustomerRef = this.dataByCustomerRef.get(contract.customerRef)!;
    const idx = byCustomerRef.findIndex(c => c.id === contract.id);
    if (idx !== -1) {
      byCustomerRef[idx] = contract;
    }
  }
}