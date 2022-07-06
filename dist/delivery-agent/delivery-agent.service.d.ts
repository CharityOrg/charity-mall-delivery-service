import { DeliveryAgentDTO, DeliveryAgentLocationDTO } from '../dto/DeliveryAgent.dto';
import { ResponseDTO } from '../dto/response.dto';
import { DeliveryAgentRepositoryInterface } from './interface/repository.interface';
export declare class DeliveryAgentService {
    private readonly repository;
    constructor(repository: DeliveryAgentRepositoryInterface);
    createAgent(payload: DeliveryAgentDTO): Promise<ResponseDTO<DeliveryAgentDTO>>;
    private updateAgent;
    updateAgentStatus(id: string, status: string): Promise<ResponseDTO<boolean>>;
    updateAgentLocation(id: string, location: DeliveryAgentLocationDTO): Promise<ResponseDTO<DeliveryAgentDTO>>;
    getAgent(id: any): Promise<ResponseDTO<DeliveryAgentDTO>>;
    getAgents(): Promise<ResponseDTO<DeliveryAgentDTO[]>>;
    deleteAgent(id: string): Promise<ResponseDTO<boolean>>;
}
