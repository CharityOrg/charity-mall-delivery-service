import { DeliveryService } from './deliver-service.service';
import { ResponseDTO } from './../dto/response.dto';
import { DeliveryReceiverUpdateDTO, DeliveryServiceDTO } from './../dto/DeliveryService.dto';
import { DeliveryStatus } from '../enums/util.enum';
export declare class DeliveryServiceController {
    private readonly service;
    constructor(service: DeliveryService);
    create(data: DeliveryServiceDTO): Promise<ResponseDTO<DeliveryServiceDTO>>;
    get(uuid: string): Promise<ResponseDTO<unknown>>;
    find(): Promise<ResponseDTO<DeliveryServiceDTO[]>>;
    updateGiverToken(uuid: string, token: string): Promise<ResponseDTO<DeliveryServiceDTO>>;
    updateDeliveryStatus(uuid: string, status: DeliveryStatus): Promise<ResponseDTO<DeliveryServiceDTO>>;
    updateReceiverToken(uuid: string, token: string): Promise<ResponseDTO<DeliveryServiceDTO>>;
    delete(uuid: string): Promise<ResponseDTO<unknown>>;
    updateDeliveryReceiver(uuid: string, payload: DeliveryReceiverUpdateDTO): Promise<ResponseDTO<DeliveryServiceDTO>>;
}
