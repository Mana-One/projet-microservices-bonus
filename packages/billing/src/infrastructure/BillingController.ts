import { Controller, Get, Param } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { Subscription } from "../domain/Subscription";
import { InMemorySubscriptions } from "../domain/Subscriptions";
import { ContractCreated } from "./ContractCreated";

@Controller()
export class BillingController {
  constructor(private readonly subscriptions: InMemorySubscriptions) {}

  @EventPattern("contract.created")
  async createSubscription(@Payload() payload: ContractCreated) {
    await this.subscriptions.add(Subscription.create(payload));
  }

  @Get(":customerRef")
  async listSubscriptionsByCustomer(@Param("customerRef") customerRef: string) {
    return await this.subscriptions.listByCustomerRef(customerRef)
      .then(res => res.map(s => ({
        id: s.id,
        contractId: s.contractId,
        status: s.status,
        customerRef: s.customerRef })));
  }
}