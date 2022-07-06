import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DeliveryAgentDTO, DeliveryAgentLocationDTO } from '../dto/DeliveryAgent.dto';
import { ResponseDTO } from '../dto/response.dto';
import { DeliveryAgentStatus, statusEnum } from '../enums/util.enum';
import { DeliveryAgentRepositoryInterface } from './interface/repository.interface';

@Injectable()
export class DeliveryAgentService {
    constructor(
        @Inject('DeliveryAgentRepositoryInterface') private readonly repository: DeliveryAgentRepositoryInterface,
    ){}
    
    async createAgent (payload: DeliveryAgentDTO): Promise<ResponseDTO<DeliveryAgentDTO>> {
        const response = new ResponseDTO<DeliveryAgentDTO>();
        try {
            payload = {
                ...payload,
                ...{
                    created_at: new Date(),
                    status: DeliveryAgentStatus.active,
                    uuid: randomUUID(),
                }
            };
            if (!payload.location) {
                payload.location = new DeliveryAgentLocationDTO();
            }

            const result = await this.repository.create(payload);
            if (result) {
                response.data = payload;
                response.code = statusEnum.successful;
            }
            
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }
        
        return response;
    }

    private async updateAgent(id: string, payload: DeliveryAgentDTO): Promise<ResponseDTO<DeliveryAgentDTO>> {
        const response = new ResponseDTO<DeliveryAgentDTO>();
        try {
            const item = await this.repository.findOneByCondition([
                {
                    user_id: id,
                },
                {
                    uuid: id,
                }
            ]);
            if (item == null) {
                response.code = statusEnum.failed;
                response.message = "Delivery Agent not found.";
            }
            else {
                response.code = statusEnum.successful;
                if (payload.location) {
                    if (payload.location.latitude) {
                        item.location.latitude = payload.location.latitude;
                    }

                    if (payload.location.longitude) {
                        item.location.longitude = payload.location.longitude;
                    }

                    if (payload.location.location) {
                        item.location.location = payload.location.location;
                    }
                }

                if (payload.status) {
                    item.status = payload.status;
                }

                item.updated_at = new Date();
                
                await this.repository.getRepo().updateOne({uuid: item.uuid}, item);
                
                response.data = item;
            }
        }
        catch(e) {
            console.log(e);
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }

    async updateAgentStatus(id: string, status: string): Promise<ResponseDTO<boolean>> {
        var response = new ResponseDTO<boolean>();
        response.data = false;
        try {
            this.updateAgent(id, {status: status});
            response.code = statusEnum.successful;
            response.data = true;
            response.message = "Agent Status updated";
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async updateAgentLocation(id: string, location: DeliveryAgentLocationDTO): Promise<ResponseDTO<DeliveryAgentDTO>> {
        var response = new ResponseDTO<DeliveryAgentDTO>();
        try {
            const agentUpdate = await this.updateAgent(id, {location: location});
            if (agentUpdate.code > statusEnum.failed) {
                response.code = statusEnum.successful;
                response.data = agentUpdate.data;
                response.message = "Agent location updated";
            }
            else {
                response = agentUpdate;
            }
            
        }
        catch(e) {
            console.log("e", e);
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async getAgent(id: any): Promise<ResponseDTO<DeliveryAgentDTO>> {
        const response = new ResponseDTO<DeliveryAgentDTO>();
        try {
            const item = await this.repository.findOneByCondition([
                {
                    user_id: id,
                },
                {
                    uuid: id,
                }
            ]);
            if (item == null) {
                response.code = statusEnum.failed;
                response.message = "Delivery Agent not found.";
            }
            else {
                response.data = item;
                response.code = statusEnum.ok;
            }
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }
        
        return response;
    }

    async getAgents(): Promise<ResponseDTO<DeliveryAgentDTO[]>> {
        const response = new ResponseDTO<DeliveryAgentDTO[]>();
        try {
            const items = await this.repository.findAll();
            if (items.length == null) {
                response.code = statusEnum.failed;
                response.message = "Delivery Agent(s) not found.";
            }
            else {
                response.data = items;
                response.code = statusEnum.ok;
            }
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }
        
        return response;
    }

    async deleteAgent(id: string): Promise<ResponseDTO<boolean>> {
        var response = new ResponseDTO<boolean>();
        response.data = false;
        
        try {
            await this.repository.remove(id)
            response.code = statusEnum.successful;
            response.data = true;
            response.message = "Agent deleted."
        }
        catch(e) {
            console.log(e);
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }
    
}
