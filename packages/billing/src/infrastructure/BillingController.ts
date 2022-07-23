import { Controller, Get, Logger, Param } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { Subscription } from "../domain/Subscription";
import { InMemorySubscriptions } from "../domain/Subscriptions";
import { ContractActivated } from "./ContractActivated";

@Controller()
export class BillingController {
  private logger = new Logger(BillingController.name);

  constructor(private readonly subscriptions: InMemorySubscriptions) {}

  @MessagePattern("contract.activated")
  async createSubscription(@Payload() payload: ContractActivated) {
    this.logger.log("Received payload");
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