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
exports.DeliveryServiceController = void 0;
const common_1 = require("@nestjs/common");
const deliver_service_service_1 = require("./deliver-service.service");
const swagger_1 = require("@nestjs/swagger");
const response_dto_1 = require("./../dto/response.dto");
const DeliveryService_dto_1 = require("./../dto/DeliveryService.dto");
const okResponse_dto_1 = require("../dto/okResponse.dto");
const util_enum_1 = require("../enums/util.enum");
let DeliveryServiceController = class DeliveryServiceController {
    constructor(service) {
        this.service = service;
    }
    async create(data) {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.createDelivery(data);
        return response.getResponse();
    }
    async get(uuid) {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.getDelivery(uuid);
        return response.getResponse();
    }
    async find() {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.getDeliveries();
        return response.getResponse();
    }
    async updateGiverToken(uuid, token) {
        let response = new response_dto_1.ResponseDTO();
        console.log("uuid", token);
        response = await this.service.updateDeliveryGiverToken(uuid, token);
        return response.getResponse();
    }
    async updateDeliveryStatus(uuid, status) {
        let response = new response_dto_1.ResponseDTO();
        response = await this.service.updateDeliveryStatus(uuid, status);
        return response.getResponse();
    }
    async updateReceiverToken(uuid, token) {
        let response = new response_dto_1.ResponseDTO();
        console.log('status', token);
        response = await this.service.updateDeliveryReceiverToken(uuid, token);
        return response.getResponse();
    }
    async delete(uuid) {
        let response = new response_dto_1.ResponseDTO();
        console.log("uuid", uuid);
        response = await this.service.deleteDelivery(uuid);
        return response.getResponse();
    }
    async updateDeliveryReceiver(uuid, payload) {
        let response = new response_dto_1.ResponseDTO();
        console.log('receiver_token', payload.receiver_token);
        response = await this.service.updateDeliveryReceiver(uuid, payload.to_entity, payload.receiver_token);
        return response.getResponse();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'new delivery creation',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryService_dto_1.DeliveryServiceDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeliveryService_dto_1.DeliveryServiceDTO]),
    __metadata("design:returntype", Promise)
], DeliveryServiceController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'get item',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryService_dto_1.DeliveryServiceDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Get)('get/:uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryServiceController.prototype, "get", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'get all item(s)',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkListResponse)(DeliveryService_dto_1.DeliveryServiceDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Get)('get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeliveryServiceController.prototype, "find", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'update delivery giver token',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryService_dto_1.DeliveryServiceDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Put)('update-giver-token/:uuid'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DeliveryServiceController.prototype, "updateGiverToken", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'update delivery status',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryService_dto_1.DeliveryServiceDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Put)('update-delivery-status/:uuid'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DeliveryServiceController.prototype, "updateDeliveryStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'update delivery receiver token',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryService_dto_1.DeliveryServiceDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Put)('update-receiver-token/:uuid'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DeliveryServiceController.prototype, "updateReceiverToken", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'delete an item',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(Boolean, { type: 'boolean' }),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Delete)('delete/:uuid'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryServiceController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        description: 'update delivery receiver token',
    }),
    (0, swagger_1.ApiProduces)('json'),
    (0, okResponse_dto_1.OkResponse)(DeliveryService_dto_1.DeliveryServiceDTO),
    (0, swagger_1.ApiConsumes)('application/json', 'multipart/form-data'),
    (0, common_1.Put)('update-delivery-receiver/:uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, DeliveryService_dto_1.DeliveryReceiverUpdateDTO]),
    __metadata("design:returntype", Promise)
], DeliveryServiceController.prototype, "updateDeliveryReceiver", null);
DeliveryServiceController = __decorate([
    (0, swagger_1.ApiTags)('delivery-service'),
    (0, common_1.Controller)('delivery-service'),
    (0, swagger_1.ApiResponse)({
        type: response_dto_1.ResponseDTO
    }),
    __metadata("design:paramtypes", [deliver_service_service_1.DeliveryService])
], DeliveryServiceController);
exports.DeliveryServiceController = DeliveryServiceController;
//# sourceMappingURL=deliver-service.controller.js.map