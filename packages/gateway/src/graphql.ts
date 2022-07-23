
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ContractStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE"
}

export class ContractCreation {
  customerRef!: string;
  signedAt!: string;
}

export class Contract {
  id!: string;
  status!: ContractStatus;
  customerRef!: string;
  signedAt!: string;
}

export abstract class IQuery {
  abstract listContracts(customerRef: string): Nullable<Nullable<Contract>[]> | Promise<Nullable<Nullable<Contract>[]>>;
}

export abstract class IMutation {
  abstract createContract(input: ContractCreation): Nullable<boolean> | Promise<Nullable<boolean>>;

  abstract activateContract(contractId: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
