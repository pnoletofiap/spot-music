import { NestFactory } from '@nestjs/core';
import { MusicasModule } from './musicas.module';

async function bootstrap() {
  const app = await NestFactory.create(MusicasModule);
  await app.listen(3000);
}
bootstrap();
