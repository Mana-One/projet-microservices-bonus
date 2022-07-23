import { Injectable } from "@nestjs/common";
import { get } from "env-var";

@Injectable()
export class ConfigService {
  readonly CONTRACTS_URL: string;
  readonly BILLING_URL: string;

  constructor() {
    this.CONTRACTS_URL = get("CONTRACTS_URL").required().asUrlString();
    this.BILLING_URL = get("BILLING_URL").required().asUrlString();
  }
}