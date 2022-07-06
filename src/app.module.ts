import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryServiceModule } from './deliver-service/deliver-service.module';
import { ListenerController } from './listener/listener.controller';
import { DeliveryAgentController } from './delivery-agent/delivery-agent.controller';
import { DeliveryAgentService } from './delivery-agent/delivery-agent.service';
import { DeliveryAgentModule } from './delivery-agent/delivery-agent.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      // 'mongodb://localhost:27017/delivery_service_db', 
      'mongodb://162.0.230.238:27017/delivery_service_db',
      {
    autoCreate: true
  }),
    DeliveryServiceModule,
    DeliveryAgentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
