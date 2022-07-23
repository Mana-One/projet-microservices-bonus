import { Module } from "@nestjs/common";
import { ClientKafka, ClientProxyFactory, ClientsModule, Transport } from "@nestjs/microservices";
import { InMemorySubscriptions } from "./domain/Subscriptions";
import { BillingController } from "./infrastructure/BillingController";
import { ConfigService } from "./infrastructure/ConfigService";

@Module({
  providers: [
    InMemorySubscriptions, 
    ConfigService, {
      provide: "CONTRACTS_SERVICE",
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: "contracts",
              brokers: [configService.KAFKA_BOOTSTRAP],
            },
            consumer: {
              groupId: "contracts-consumer"
            }
          }
        })
      },
      inject: [ConfigService]
  }],
  controllers: [BillingController]
})
export class AppModule {}