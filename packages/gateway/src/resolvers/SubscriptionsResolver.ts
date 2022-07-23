import { Args, Query, Resolver } from "@nestjs/graphql";
import axios from "axios";

@Resolver("Subscription")
export class SubscriptionsResolver {
  @Query()
  async listSubscriptions(@Args("customerRef") customerRef: string) {
    const res = await axios.get(`http://localhost:3001/${customerRef}`);
    return res.data;
  }
}