import { NestFactory } from '@nestjs/core';
import { SharesModule } from './shares.module';

async function bootstrap() {
  const app = await NestFactory.create(SharesModule);
  await app.listen(3000);
}
bootstrap();
