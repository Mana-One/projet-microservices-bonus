import { Injectable } from "@nestjs/common";
import { get } from "env-var";

@Injectable()
export class ConfigService {
  readonly KAFKA_BOOTSTRAP: string;

  constructor() {
    this.KAFKA_BOOTSTRAP = get("KAFKA_BOOTSTRAP").required().asString();
  }
}