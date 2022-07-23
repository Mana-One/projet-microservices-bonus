import { IsNotEmpty, IsString } from "class-validator"

export class ContractCreated {
  @IsNotEmpty()
  @IsString()
  contractId!: string

  @IsNotEmpty()
  @IsString()
  customerRef!: string
}