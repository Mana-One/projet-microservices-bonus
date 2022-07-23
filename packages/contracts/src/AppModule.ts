import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { InMemoryContracts } from "./domain/InMemoryContracts";
import { ContractsController } from "./infrastructure/ContractsController";

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
            groupId: "constracts-consumer"
          }
        }
      },
    ]),
  ],
  providers: [InMemoryContracts],
  controllers: [ContractsController]
})
export class AppModule {}