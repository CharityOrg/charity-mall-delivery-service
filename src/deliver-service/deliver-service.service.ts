import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import e from 'express';
import { Model } from 'mongoose';
import { AppHTTPRequestInterface } from 'src/http-request/app-request';
import { HTTPRequest } from 'src/http-request/http-request';
import { interestServiceUrls } from 'src/urls';
import { DeliveryServiceDTO } from './../dto/DeliveryService.dto';
import { ResponseDTO } from './../dto/response.dto';
import { DeliveryStatus, statusEnum } from './../enums/util.enum';
import { Delivery, DeliveryDocument } from './deliver-service.model';
import { DeliveryServiceRepositoryInterface } from './interface/repository.interface';

@Injectable()
export class DeliveryService {
    constructor(
        @Inject('DeliveryServiceRepositoryInterface') private readonly deliveryServiceRepository: DeliveryServiceRepositoryInterface,
        @Inject('HTTPRequest') private readonly httpRequest: AppHTTPRequestInterface,
    ) {}
    
    async createDelivery(payload: DeliveryServiceDTO):  Promise<ResponseDTO<DeliveryServiceDTO>> {
        const response = new ResponseDTO<DeliveryServiceDTO>();
        
        try {
            payload.status = DeliveryStatus.pending;
            payload.uuid = randomUUID();
            
            await this.deliveryServiceRepository.create(payload);
            response.data = payload;
            response.code = statusEnum.successful;
        }
        catch(e) {
            console.log(e);
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    private async updateDelivery(id: any, payload: DeliveryServiceDTO):  Promise<ResponseDTO<DeliveryServiceDTO>> {
        const response = new ResponseDTO<DeliveryServiceDTO>();
        
        try {
            // get delivery item
            const item = await this.deliveryServiceRepository.findOneByCondition([
                {
                    uuid: id
                },
                {
                    item_id: id
                },
            ]);
            
            if (item == null) {
                response.code = statusEnum.failed;
                response.message = "Delivery item not found."
                return response;
            }

            if (payload.to_entity) {
                (item).to_entity = payload.to_entity;
            }

            if (payload.status) {
                (item).status = payload.status;
            }

            if (payload.from_entity) {
                (item).from_entity = payload.from_entity;
            }
            
            if (payload.delivery_agent) {
                (item).delivery_agent = payload.delivery_agent;
            }

            if (payload.item_id) {
                (item).item_id = payload.item_id;
            }

            if (payload.receiver_token) {
                (item).receiver_token = payload.receiver_token;
            }

            if (payload.giver_token) {
                (item).giver_token = payload.giver_token;
            }

            item.updated_at = new Date();
            
            await this.deliveryServiceRepository.getRepo().updateOne(id, item);
            
            response.data = item;
            response.code = statusEnum.successful;
        }
        catch(e) {
            console.log(e);
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async updateDeliveryReceiverToken(deliveryId: any, token: string):  Promise<ResponseDTO<DeliveryServiceDTO>> {
        let response = new ResponseDTO<DeliveryServiceDTO>();
        
        try {

            const result = await this.updateDelivery(deliveryId, {receiver_token: token});
            response = result; 
            // response.code = statusEnum.successful;
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async updateDeliveryGiverToken(deliveryId: any, token: string):  Promise<ResponseDTO<DeliveryServiceDTO>> {
        let response = new ResponseDTO<DeliveryServiceDTO>();
        
        try {

            const result = await this.updateDelivery(deliveryId, {giver_token: token});
            response = result; 
            // response.code = statusEnum.successful;
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async updateDeliveryStatus(deliveryId: any, status: DeliveryStatus):  Promise<ResponseDTO<DeliveryServiceDTO>> {
        let response = new ResponseDTO<DeliveryServiceDTO>();
        
        try {

            const result = await this.updateDelivery(deliveryId, {status: status.toString()});
            response = result; 
            // response.code = statusEnum.successful;
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async updateDeliveryAgent(deliveryId: any, deliveryAgentId: string):  Promise<ResponseDTO<DeliveryServiceDTO>> {
        let response = new ResponseDTO<DeliveryServiceDTO>();
        
        try {

            const result = await this.updateDelivery(deliveryId, {delivery_agent: deliveryAgentId});
            response = result; 
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async updateDeliveryReceiver(uuid: any, receiverId: string, receiverToken?: string):  Promise<ResponseDTO<DeliveryServiceDTO>> {
        let response = new ResponseDTO<DeliveryServiceDTO>();
        
        try {
            const data = {to_entity: receiverId};
            if (receiverToken) data['receiver_token'] = receiverToken;
            const result = await this.updateDelivery(uuid, data);
            response = result; 
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async verifyDeliveryToken(uuid: any, token: string, entity: string = 'giver'):  Promise<ResponseDTO<boolean>> {
        let response = new ResponseDTO<boolean>();
        response.data = false;
        try {

            const result = await this.deliveryServiceRepository.findOneById(uuid);
            if (result == null) {
                response.code = statusEnum.failed;
                response.message = "Delivery item not found."
                return response;
            }
            else {
                // verify token
                response.data = result[entity + '_token'] == token;
                response.code = response.data ? statusEnum.successful: statusEnum.failed;
                response.message = !response.data ? 'Token verified' : "Incorrect token passed.";
                if (response.data) {
                    // update delivery status if successful
                    if (entity == "receiver") await this.updateDeliveryStatus(uuid, DeliveryStatus.settled);
                    if (entity == "giver") await this.updateDeliveryStatus(uuid, DeliveryStatus.available);
                }
            }
            
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async getDelivery(id: string):  Promise<ResponseDTO<DeliveryServiceDTO>> {
        const response = new ResponseDTO<DeliveryServiceDTO>();
        
        try {
            // get delivery item
            const item = await this.deliveryServiceRepository.findOneById(id);
            if (item == null) {
                response.code = statusEnum.failed;
                response.message = "Delivery item not found."
                return response;
            }

            response.data = item;
            response.code = statusEnum.ok;

        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async getDeliveries():  Promise<ResponseDTO<DeliveryServiceDTO[]>> {
        const response = new ResponseDTO<DeliveryServiceDTO[]>();
        try {
            // get delivery item
            const item = await this.deliveryServiceRepository.findAll();
            if (item.length == 0) {
                response.code = statusEnum.failed;
                response.message = "Delivery item(s) not found."
                return response;
            }

            response.data = item;
            response.code = statusEnum.ok;
        }
        catch(e) {
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }

    async deleteDelivery(id: string):  Promise<ResponseDTO<boolean>> {
        const response = new ResponseDTO<boolean>();
        response.data = true;
        try {
            await this.deliveryServiceRepository.remove(id);
            response.code = statusEnum.successful;
        }
        catch(e) {
            console.log(e);
            response.data = false;
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }
    async processDeliveryForToday():  Promise<ResponseDTO<boolean>> {
        const response = new ResponseDTO<boolean>();
        response.data = true;
        try {
            //get all deliveries where delivery_date is today or past today
            const deliveries = await this.deliveryServiceRepository.findByCondition({$where: [{
                delivery_date: new Date().toLocaleDateString(),
            }]});
            // for each delivery trigger interest selection
            let counter = 0;
            deliveries.forEach(async element => {
                const result = await this.httpRequest.getRequest({url: interestServiceUrls.base + interestServiceUrls.selectInterest + element.item_id});
                if (result['code'] > statusEnum.failed) counter++;
            });
            
            response.code = statusEnum.successful;
            response.message = `Processed ${counter} of ${deliveries.length} deliveries.`;
        }
        catch(e) {
            
            response.data = false;
            response.code = statusEnum.error;
            response.extra_data = e.toString();
        }

        return response;
    }
}
