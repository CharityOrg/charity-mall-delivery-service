import { DeliveryAgentDTO, DeliveryAgentLocationDTO } from 'src/dto/DeliveryAgent.dto';
import { ResponseDTO } from 'src/dto/response.dto';
import { DeliveryAgentService } from './delivery-agent.service';
export declare class DeliveryAgentController {
    private readonly service;
    constructor(service: DeliveryAgentService);
    newAgent(payload: DeliveryAgentDTO): Promise<ResponseDTO<unknown>>;
    updateAgentStatus(status: string, uuid: string): Promise<ResponseDTO<unknown>>;
    updateAgentLocation(payload: DeliveryAgentLocationDTO, uuid: string): Promise<ResponseDTO<unknown>>;
    getAgent(uuid: string): Promise<ResponseDTO<unknown>>;
    getAgents(): Promise<ResponseDTO<unknown>>;
}
