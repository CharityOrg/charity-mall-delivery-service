import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiDescription = `Cho - Delivery API`;

  //Enable swagger documentation for this API
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Cho - Delivery API')
    .setDescription(apiDescription)
    .setVersion('1.0')
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, doc);

  await app.listen(process.env.PORT || 3042);
  console.log("server started")
}
bootstrap();
