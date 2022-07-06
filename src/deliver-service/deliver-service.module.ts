import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HTTPRequest } from 'src/http-request/http-request';
import { ListenerController } from '../listener/listener.controller';
import { DeliverServiceRepository } from './../repositories/delivery-service.repository';
import { DeliveryServiceController } from './deliver-service.controller';
import { Delivery, DeliverySchema } from './deliver-service.model';
import { DeliveryService } from './deliver-service.service';
import { DeliveryServiceRepositoryInterface } from './interface/repository.interface'

@Module({
  imports: [
    MongooseModule.forFeature([{name: Delivery.name, schema: DeliverySchema}]),
    HttpModule,
  ],
  controllers: [DeliveryServiceController, ListenerController],
  providers: [
    DeliveryService,
    {
      provide: 'DeliveryServiceRepositoryInterface',
      useClass: DeliverServiceRepository
    },
    {
      provide: 'HTTPRequest',
      useClass: HTTPRequest,
    },
    
  ]
})
export class DeliveryServiceModule {}
