import { IsNotEmpty, IsString } from "class-validator"

export class ContractActivated {
  @IsNotEmpty()
  @IsString()
  contractId!: string

  @IsNotEmpty()
  @IsString()
  customerRef!: string
}