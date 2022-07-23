import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { InMemorySubscriptions } from "./domain/Subscriptions";
import { BillingController } from "./infrastructure/BillingController";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CONTRACTS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "contracts",
            brokers: ["localhost:9092"],
          },
          consumer: {
            groupId: "contracts-consumer"
          }
        }
      },
    ]),
  ],
  providers: [InMemorySubscriptions],
  controllers: [BillingController]
})
export class AppModule {}