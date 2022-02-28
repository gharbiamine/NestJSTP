import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
const corsOptions = {
  origin: ['localhost:3000'],
  optionsSuccessStatus: 200,
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
