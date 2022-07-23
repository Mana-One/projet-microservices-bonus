import { Injectable } from "@nestjs/common";
import { Kafka, Producer } from "kafkajs";
import { ConfigService } from "./ConfigService";

@Injectable()
export class ContractsProducer {
  private readonly kafkaInstance: Kafka;
  private producer: Producer;

  constructor(private readonly configService: ConfigService) {
    this.kafkaInstance = new Kafka({
      clientId: "first-kafka-client",
      brokers: [this.configService.KAFKA_BOOTSTRAP],
      connectionTimeout: 3000,
      authenticationTimeout: 1000,
      reauthenticationThreshold: 10_000,
    });

    this.producer = this.kafkaInstance.producer();
  }

  async publish(message: any): Promise<void> {
    await this.producer.connect();
    await this.producer.send({
      topic: "contract.activated",
      messages: [{ value: JSON.stringify(message) }],
    });
  }
}