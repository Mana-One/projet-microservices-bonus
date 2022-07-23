import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import axios from "axios";
import { ConfigService } from "../ConfigService";

@Resolver("Contract")
export class ContractsResolver {
  constructor(private readonly configService: ConfigService) {}

  @Query()
  async listContracts(@Args("customerRef") customerRef: string) {
    const url = new URL(customerRef, this.configService.CONTRACTS_URL);
    const res = await axios.get(url.toString());
    return res.data;
  }

  @Mutation()
  async createContract(@Args("input") input: any) {
    return await axios.post(this.configService.CONTRACTS_URL, {
      customerRef: input.customerRef,
      signedAt: input.signedAt
    }, { headers: { "Content-Type": "application/json" }})
    .then(() => true)
    .catch(() =>  false );
  }

  @Mutation()
  async activateContract(@Args("contractId") contractId: string) {
    const url = new URL(`${contractId}/activate`, this.configService.CONTRACTS_URL);
    return await axios.put(url.toString())
      .then(() => true)
      .catch(() => false);
  }
}