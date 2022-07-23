import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./AppModule";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors();
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ["localhost:9092"] 
      }, 
      consumer: {
        groupId: "first-kafka-consumer" }}});

  await app.startAllMicroservices();
  await app.listen(3001);
}

bootstrap().catch(console.error);