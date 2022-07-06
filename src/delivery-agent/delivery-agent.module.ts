import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliverAgentRepository } from 'src/repositories/delivery-agent.repository';
import { DeliveryAgent, DeliveryAgentSchema } from './deliver-agent.model';
import { DeliveryAgentController } from './delivery-agent.controller';
import { DeliveryAgentService } from './delivery-agent.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: DeliveryAgent.name, schema: DeliveryAgentSchema}]),
    ],
    controllers: [
        DeliveryAgentController
    ],
    providers: [
        DeliveryAgentService,
        {
          provide: 'DeliveryAgentRepositoryInterface',
          useClass: DeliverAgentRepository,
        },
    ]
})
export class DeliveryAgentModule {}
