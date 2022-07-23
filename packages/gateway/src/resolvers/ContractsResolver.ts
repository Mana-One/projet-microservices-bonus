import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import axios from "axios";
import { Contract, ContractCreation } from "../graphql";

@Resolver("Contract")
export class ContractsResolver {
  @Query()
  async listContracts(@Args("customerRef") customerRef: string) {
    const res = await axios.get(`http://localhost:3000/${customerRef}`);
    return res.data;
  }

  @Mutation()
  async createContract(@Args("input") input: any) {
    return await axios.post("http://localhost:3000/", {
      customerRef: input.customerRef,
      signedAt: input.signedAt
    }, { headers: { "Content-Type": "application/json" }})
    .then(() => true)
    .catch(() =>  false );
  }

  @Mutation()
  async activateContract(@Args("contractId") contractId: string) {
    return await axios.put(`http://localhost:3000/${contractId}/activate`)
      .then(() => true)
      .catch(() => false);
  }
}