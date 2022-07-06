import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiProduces } from '@nestjs/swagger';
import { DeliveryAgentDTO, DeliveryAgentLocationDTO } from 'src/dto/DeliveryAgent.dto';
import { OkResponse } from 'src/dto/okResponse.dto';
import { ResponseDTO } from 'src/dto/response.dto';
import { DeliveryAgentService } from './delivery-agent.service';

@Controller('delivery-agent')
export class DeliveryAgentController {
  constructor(
    private readonly service: DeliveryAgentService,
  ) { }
  @ApiOperation({
    description: 'create delivery agent',
  })
  @ApiProduces('json')
  @OkResponse(DeliveryAgentDTO)
  @ApiConsumes('application/json', 'multipart/form-data')
  @Post('new-agent')
  async newAgent(
    @Body() payload: DeliveryAgentDTO,
  ) {
    let response = new ResponseDTO();
    response = await this.service.createAgent(payload);

    return response.getResponse();
  }
  @ApiOperation({
    description: 'update delivery agent status',
  })
  @ApiProduces('json')
  @OkResponse(DeliveryAgentDTO)
  @ApiConsumes('application/json', 'multipart/form-data')
  @Put('update-agent-status/:uuid')
  async updateAgentStatus(
    @Query('status') status: string,
    @Param('uuid') uuid: string,

  ) {
    let response = new ResponseDTO();
    if (!status) {
      response.message = "Please provide agent status";
      return response.getResponse();
    }

    response = await this.service.updateAgentStatus(uuid, status);

    return response.getResponse();
  }
  @ApiOperation({
    description: 'update delivery agent location',
  })
  @ApiProduces('json')
  @OkResponse(DeliveryAgentLocationDTO)
  @ApiConsumes('application/json', 'multipart/form-data')
  @Put('update-agent-location/:uuid')
  async updateAgentLocation(
    @Body() payload: DeliveryAgentLocationDTO,
    @Param('uuid') uuid: string,
  ) {
    let response = new ResponseDTO();
    response = await this.service.updateAgentLocation(uuid, payload);

    return response.getResponse();
  }

  @ApiOperation({
    description: 'get a delivery agent',
  })
  @ApiProduces('json')
  @OkResponse(DeliveryAgentDTO)
  @ApiConsumes('application/json', 'multipart/form-data')
  @Get('get-agent/:uuid')
  async getAgent(
    @Param('uuid') uuid: string,
  ) {
    let response = new ResponseDTO();
    response = await this.service.getAgent(uuid);

    return response.getResponse();
  }

  @ApiOperation({
    description: 'get all delivery agent(s)',
  })
  @ApiProduces('json')
  @OkResponse(DeliveryAgentDTO, { type: 'array' })
  @ApiConsumes('application/json', 'multipart/form-data')
  @Get('get-agents')
  async getAgents() {
    let response = new ResponseDTO();
    response = await this.service.getAgents();

    return response.getResponse();
  }
}
