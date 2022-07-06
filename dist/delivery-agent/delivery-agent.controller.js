"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryAgentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const DeliveryAgent_dto_1 = require("../dto/DeliveryAgent.dto");
const okResponse_dto_1 = require("../dto/okResponse.dto");
const response_dto_1 = require("../dto/response.dto");
const delivery_agent_service_1 = require("./delivery-agent.service");
let DeliveryAgentController = class DeliveryAgentController {
    constructor(service) {
        this.service = service;
    }
    async newAgent(payload) {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.createAgent(payload);
        return response.getResponse();
    }
    async updateAgentStatus(status, uuid) {
        let response = new response_dto_1.ResponseDTO();
        if (!status) {
            response.message = "Please provide agent status";
            return response.getResponse();
        }
        response = await this.service.updateAgentStatus(uuid, status);
        return response.getResponse();
    }
    async updateAgentLocation(payload, uuid) {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.updateAgentLocation(uuid, payload);
        return response.getResponse();
    }
    async getAgent(uuid) {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.getAgent(uuid);
        return response.getResponse();
    }
    async getAgents() {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.getAgents();
        return response.getResponse();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'create delivery agent',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryAgent_dto_1.DeliveryAgentDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Post)('new-agent'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeliveryAgent_dto_1.DeliveryAgentDTO]),
    __metadata("design:returntype", Promise)
], DeliveryAgentController.prototype, "newAgent", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'update delivery agent status',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryAgent_dto_1.DeliveryAgentDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Put)('update-agent-status/:uuid'),
    __param(0, (0, common_1.Query)('status')),
    __param(1, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DeliveryAgentController.prototype, "updateAgentStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'update delivery agent location',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryAgent_dto_1.DeliveryAgentLocationDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Put)('update-agent-location/:uuid'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeliveryAgent_dto_1.DeliveryAgentLocationDTO, String]),
    __metadata("design:returntype", Promise)
], DeliveryAgentController.prototype, "updateAgentLocation", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'get a delivery agent',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryAgent_dto_1.DeliveryAgentDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Get)('get-agent/:uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryAgentController.prototype, "getAgent", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'get all delivery agent(s)',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryAgent_dto_1.DeliveryAgentDTO, { type: 'array' }),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Get)('get-agents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeliveryAgentController.prototype, "getAgents", null);
DeliveryAgentController = __decorate([
    (0, common_1.Controller)('delivery-agent'),
    __metadata("design:paramtypes", [delivery_agent_service_1.DeliveryAgentService])
], DeliveryAgentController);
exports.DeliveryAgentController = DeliveryAgentController;
//# sourceMappingURL=delivery-agent.controller.js.map