import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./AppModule";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors();
        
  await app.startAllMicroservices();
  await app.listen(3002);
}

bootstrap().catch(console.error);