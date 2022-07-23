import { Module } from "@nestjs/common";
import { InMemoryContracts } from "./domain/InMemoryContracts";
import { ConfigService } from "./infrastructure/ConfigService";
import { ContractsController } from "./infrastructure/ContractsController";
import { ContractsProducer } from "./infrastructure/ContractsProducer";

@Module({
  providers: [InMemoryContracts, ContractsProducer, ConfigService],
  controllers: [ContractsController]
})
export class AppModule {}