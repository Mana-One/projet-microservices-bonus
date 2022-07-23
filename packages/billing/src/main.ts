import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./AppModule";
import { ConfigService } from "./infrastructure/ConfigService";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors();
  const config = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [config.KAFKA_BOOTSTRAP] 
      }, 
      consumer: {
        groupId: "first-kafka-consumer" }}});

  await app.startAllMicroservices();
  await app.listen(3001);
}

bootstrap().catch(console.error);