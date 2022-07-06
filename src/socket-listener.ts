import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        `${process.env.RABBITMQ_CONNECTION_STRING}`,
      ],
      queue: 'delivery_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.listen().then(() => {
    console.log('Service is listening');
  });
}
bootstrap();
