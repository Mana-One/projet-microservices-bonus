import { Args, Query, Resolver } from "@nestjs/graphql";
import axios from "axios";
import { ConfigService } from "../ConfigService";

@Resolver("Subscription")
export class SubscriptionsResolver {
  constructor(private readonly configService: ConfigService) {}

  @Query()
  async listSubscriptions(@Args("customerRef") customerRef: string) {
    const url = new URL(customerRef, this.configService.BILLING_URL);
    const res = await axios.get(url.toString());
    return res.data;
  }
}