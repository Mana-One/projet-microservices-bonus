import { Subscription } from "./Subscription";

export class InMemorySubscriptions {
  private data: Map<string, Subscription> = new Map();
  private dataByCustomerRef: Map<string, Subscription[]> = new Map();

  async add(subscription: Subscription): Promise<void> {
    this.data.set(subscription.id, subscription);
    if (!this.dataByCustomerRef.has(subscription.customerRef)) {
      this.dataByCustomerRef.set(subscription.customerRef, [subscription]);
    } else {
      this.dataByCustomerRef.get(subscription.customerRef)!.push(subscription);
    }
  }

  async listByCustomerRef(customerRef: string): Promise<Subscription[]> {
    return this.dataByCustomerRef.get(customerRef) || [];
  }
}