import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      // urls: ['amqp://localhost:5672'],
      urls: [
        'amqps://hzrndbxi:awtUfTig_X7rUPlfsJzJBAGO8mOQA7cC@cow.rmq2.cloudamqp.com/hzrndbxi',
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
