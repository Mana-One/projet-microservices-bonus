import { Module } from "@nestjs/common";
import { InMemoryContracts } from "./domain/InMemoryContracts";
import { ContractsController } from "./infrastructure/ContractsController";
import { ContractsProducer } from "./infrastructure/ContractsProducer";

@Module({
  providers: [InMemoryContracts, ContractsProducer],
  controllers: [ContractsController]
})
export class AppModule {}