import { v1 } from "uuid"

interface ContractProps {
  readonly id: string
  readonly status: "PENDING" | "ACTIVE"
  readonly customerRef: string
  readonly signedAt: Date
}

export class Contract implements ContractProps {
  readonly id: string
  readonly status: "PENDING" | "ACTIVE"
  readonly customerRef: string
  readonly signedAt: Date

  private constructor(props: ContractProps) {
    this.id = props.id;
    this.status = props.status;
    this.customerRef = props.customerRef;
    this.signedAt = props.signedAt;
  }

  activate(): Contract {
    return new Contract({
      id: this.id,
      status: "ACTIVE",
      customerRef: this.customerRef,
      signedAt: this.signedAt
    });
  }

  static create(props: Omit<ContractProps, "id" | "status">): Contract {
    return new Contract({
      id: v1(),
      status: "PENDING",
      ...props
    });
  }

  static of(props: ContractProps): Contract {
    return new Contract(props);
  }
}