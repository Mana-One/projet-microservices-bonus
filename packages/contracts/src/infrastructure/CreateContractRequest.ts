import { IsISO8601, IsNotEmpty, IsString } from "class-validator";

export class CreateContractRequest {
  @IsNotEmpty()
  @IsString()
  customerRef!: string

  @IsISO8601()
  signedAt!: string
}