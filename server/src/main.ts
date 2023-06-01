import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable CORS
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
