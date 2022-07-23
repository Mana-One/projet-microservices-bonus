import { v1 } from "uuid";

interface SubscriptionProps {
  readonly id: string
  readonly contractId: string
  readonly status: "ACTIVE" | "SUSPENDED"
  readonly customerRef: string
}

export class Subscription implements SubscriptionProps {
  readonly id: string;
  readonly contractId: string;
  readonly status: "ACTIVE" | "SUSPENDED";
  readonly customerRef: string;

  private constructor(props: SubscriptionProps) {
    this.id = props.id;
    this.contractId = props.contractId;
    this.status = props.status;
    this.customerRef = props.customerRef;
  }

  static create(props: Omit<SubscriptionProps, "id" | "status">): Subscription {
    return new Subscription({
      ...props,
      id: v1(),
      status: "ACTIVE"
    });
  }
}