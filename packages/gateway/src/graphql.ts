
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

import { IsNotEmpty, IsString } from "class-validator";

/* tslint:disable */
/* eslint-disable */

export enum ContractStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE"
}

export enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED"
}

export class ContractCreation {
  @IsNotEmpty()
  @IsString()
  customerRef!: string;

  @IsNotEmpty()
  @IsString()
  signedAt!: string;
}

export class Contract {
  id!: string;
  status!: ContractStatus;
  customerRef!: string;
  signedAt!: string;
}

export abstract class ISubscription {
  abstract id(): string | Promise<string>;

  abstract contractId(): string | Promise<string>;

  abstract status(): Nullable<SubscriptionStatus> | Promise<Nullable<SubscriptionStatus>>;

  abstract customerRef(): string | Promise<string>;
}

export abstract class IQuery {
  abstract listContracts(customerRef: string): Nullable<Nullable<Contract>[]> | Promise<Nullable<Nullable<Contract>[]>>;

  abstract listSubscriptions(customerRef: string): Nullable<Nullable<ISubscription>[]> | Promise<Nullable<Nullable<ISubscription>[]>>;
}

export abstract class IMutation {
  abstract createContract(input: ContractCreation): Nullable<boolean> | Promise<Nullable<boolean>>;

  abstract activateContract(contractId: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
