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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const deliver_service_service_1 = require("./../deliver-service/deliver-service.service");
const socket_keys_enum_1 = require("./../enums/socket-keys.enum");
let ListenerController = class ListenerController {
    constructor(service) {
        this.service = service;
    }
    async createDelivery(payload) {
        try {
            if (payload.source == "deliveryService") {
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
__decorate([
    (0, microservices_1.EventPattern)(socket_keys_enum_1.SocketKeys.createDelivery),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListenerController.prototype, "createDelivery", null);
ListenerController = __decorate([
    (0, common_1.Controller)('listener'),
    __metadata("design:paramtypes", [deliver_service_service_1.DeliveryService])
], ListenerController);
exports.ListenerController = ListenerController;
//# sourceMappingURL=listener.controller.js.map