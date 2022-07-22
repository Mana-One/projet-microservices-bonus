import { Module } from "@nestjs/common";
import { InMemoryContracts } from "./domain/InMemoryContracts";
import { ContractsController } from "./infrastructure/ContractsController";

@Module({
  providers: [InMemoryContracts],
  controllers: [ContractsController]
})
export class AppModule {}