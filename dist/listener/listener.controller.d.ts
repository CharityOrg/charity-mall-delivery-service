import { DeliveryService } from './../deliver-service/deliver-service.service';
export declare class ListenerController {
    private readonly service;
    constructor(service: DeliveryService);
    createDelivery(payload: any): Promise<void>;
}
