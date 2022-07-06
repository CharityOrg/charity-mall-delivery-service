import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DeliveryService } from './deliver-service.service';
import { ApiBadRequestResponse, ApiConsumes, ApiOkResponse, ApiOperation, ApiProduces, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { ResponseDTO } from './../dto/response.dto';
import { DeliveryReceiverUpdateDTO, DeliveryServiceDTO } from './../dto/DeliveryService.dto';
import { OkListResponse, OkResponse } from '../dto/okResponse.dto';
import { DeliveryStatus } from '../enums/util.enum';

@ApiTags('delivery-service')
@Controller('delivery-service')
@ApiResponse({
  type: ResponseDTO
})
export class DeliveryServiceController {
    constructor(
        private readonly service: DeliveryService,
    ) {}

      @ApiOperation({
        description: 'new delivery creation',
      })
      @ApiProduces('json')
      @OkResponse(DeliveryServiceDTO)
      @ApiConsumes('application/json', 'multipart/form-data')
      @Post('create')
      async create(
        @Body() data: DeliveryServiceDTO
      ): Promise<ResponseDTO<DeliveryServiceDTO>> {
        let response = new ResponseDTO();
        response = await this.service.createDelivery(data);
    
        return response.getResponse();
      }

      @ApiOperation({
        description: 'get item',
      })
      @ApiProduces('json')

      @OkResponse(DeliveryServiceDTO)
      @ApiConsumes('application/json', 'multipart/form-data')
      @Get('get/:uuid')
      async get(
        @Param('uuid') uuid: string
      ) {
        let response = new ResponseDTO();
        response = await this.service.getDelivery(uuid);
    
        return response.getResponse();
      }

      @ApiOperation({
        description: 'get all item(s)',
      })
      @ApiProduces('json')
      @OkListResponse(DeliveryServiceDTO)
      @ApiConsumes('application/json', 'multipart/form-data')
      @Get('get-all')
      async find() {
        let response: ResponseDTO<DeliveryServiceDTO[]> = new ResponseDTO<DeliveryServiceDTO[]>();
        response = await this.service.getDeliveries();
    
        return response.getResponse();
      }

      @ApiOperation({
        description: 'update delivery giver token',
      })
      @ApiProduces('json')
      @OkResponse(DeliveryServiceDTO)
      @ApiConsumes('application/json', 'multipart/form-data')
      @Put('update-giver-token/:uuid')
      async updateGiverToken(
        @Param() uuid: string,
        @Body() token: string
      ) {
        let response = new ResponseDTO<DeliveryServiceDTO>();
        console.log("uuid", token);
        response = await this.service.updateDeliveryGiverToken(uuid, token);
    
        return response.getResponse();
      }

      @ApiOperation({
        description: 'update delivery status',
      })
      @ApiProduces('json')
      @OkResponse(DeliveryServiceDTO)
      @ApiConsumes('application/json', 'multipart/form-data')
      @Put('update-delivery-status/:uuid')
      async updateDeliveryStatus(
        @Param() uuid: string,
        @Body() status: DeliveryStatus
      ) {
        let response = new ResponseDTO<DeliveryServiceDTO>();
        response = await this.service.updateDeliveryStatus(uuid, status);
    
        return response.getResponse();
      }

      @ApiOperation({
        description: 'update delivery receiver token',
      })
      @ApiProduces('json')
      @OkResponse(DeliveryServiceDTO)
      @ApiConsumes('application/json', 'multipart/form-data')
      @Put('update-receiver-token/:uuid')
      async updateReceiverToken(
        @Param() uuid: string,
        @Body() token: string
      ) {
        let response = new ResponseDTO<DeliveryServiceDTO>();
        console.log('status', token);
        response = await this.service.updateDeliveryReceiverToken(uuid, token);
    
        return response.getResponse();
      }

      @ApiOperation({
        description: 'delete an item',
      })
      @ApiProduces('json')
      @OkResponse(Boolean, {type: 'boolean'})
      @ApiConsumes('application/json', 'multipart/form-data')
      @Delete('delete/:uuid')
      async delete(
        @Param() uuid: string
      ) {
        let response = new ResponseDTO();
        console.log("uuid", uuid);
        response = await this.service.deleteDelivery(uuid);
    
        return response.getResponse();
      }
      
      @ApiOperation({
        description: 'update delivery receiver token',
      })
      @ApiProduces('json')
      @OkResponse(DeliveryServiceDTO)
      @ApiConsumes('application/json', 'multipart/form-data')
      @Put('update-delivery-receiver/:uuid')
      async updateDeliveryReceiver(
        @Param('uuid') uuid: string,
        @Body() payload: DeliveryReceiverUpdateDTO
      ) {
        let response = new ResponseDTO<DeliveryServiceDTO>();
        console.log('receiver_token', payload.receiver_token);
        response = await this.service.updateDeliveryReceiver(uuid, payload.to_entity, payload.receiver_token);
    
        return response.getResponse();
      }
}
