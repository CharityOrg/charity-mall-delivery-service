import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Delivery } from './../deliver-service/deliver-service.model';
import { DeliveryService } from './../deliver-service/deliver-service.service';
import { SocketKeys } from './../enums/socket-keys.enum';

@Controller('listener')
export class ListenerController {
    constructor(
        private readonly service: DeliveryService
    ){}
    @EventPattern(SocketKeys.createDelivery)
    async createDelivery(payload: any){
        try {
            if (payload.source == "deliveryService") {
                
            }
        }
        catch(e) {
            console.log(e);
        }
    }
}
