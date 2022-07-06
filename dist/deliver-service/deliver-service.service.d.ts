import { AppHTTPRequestInterface } from 'src/http-request/app-request';
import { DeliveryServiceDTO } from './../dto/DeliveryService.dto';
import { ResponseDTO } from './../dto/response.dto';
import { DeliveryStatus } from './../enums/util.enum';
import { DeliveryServiceRepositoryInterface } from './interface/repository.interface';
export declare class DeliveryService {
    private readonly deliveryServiceRepository;
    private readonly httpRequest;
    constructor(deliveryServiceRepository: DeliveryServiceRepositoryInterface, httpRequest: AppHTTPRequestInterface);
    createDelivery(payload: DeliveryServiceDTO): Promise<ResponseDTO<DeliveryServiceDTO>>;
    private updateDelivery;
    updateDeliveryReceiverToken(deliveryId: any, token: string): Promise<ResponseDTO<DeliveryServiceDTO>>;
    updateDeliveryGiverToken(deliveryId: any, token: string): Promise<ResponseDTO<DeliveryServiceDTO>>;
    updateDeliveryStatus(deliveryId: any, status: DeliveryStatus): Promise<ResponseDTO<DeliveryServiceDTO>>;
    updateDeliveryAgent(deliveryId: any, deliveryAgentId: string): Promise<ResponseDTO<DeliveryServiceDTO>>;
    updateDeliveryReceiver(uuid: any, receiverId: string, receiverToken?: string): Promise<ResponseDTO<DeliveryServiceDTO>>;
    verifyDeliveryToken(uuid: any, token: string, entity?: string): Promise<ResponseDTO<boolean>>;
    getDelivery(id: string): Promise<ResponseDTO<DeliveryServiceDTO>>;
    getDeliveries(): Promise<ResponseDTO<DeliveryServiceDTO[]>>;
    deleteDelivery(id: string): Promise<ResponseDTO<boolean>>;
    processDeliveryForToday(): Promise<ResponseDTO<boolean>>;
}
