"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryServiceModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const http_request_1 = require("../http-request/http-request");
const listener_controller_1 = require("../listener/listener.controller");
const delivery_service_repository_1 = require("./../repositories/delivery-service.repository");
const deliver_service_controller_1 = require("./deliver-service.controller");
const deliver_service_model_1 = require("./deliver-service.model");
const deliver_service_service_1 = require("./deliver-service.service");
let DeliveryServiceModule = class DeliveryServiceModule {
};
DeliveryServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: deliver_service_model_1.Delivery.name, schema: deliver_service_model_1.DeliverySchema }]),
            axios_1.HttpModule,
        ],
        controllers: [deliver_service_controller_1.DeliveryServiceController, listener_controller_1.ListenerController],
        providers: [
            deliver_service_service_1.DeliveryService,
            {
                provide: 'DeliveryServiceRepositoryInterface',
                useClass: delivery_service_repository_1.DeliverServiceRepository
            },
            {
                provide: 'HTTPRequest',
                useClass: http_request_1.HTTPRequest,
            },
        ]
    })
], DeliveryServiceModule);
exports.DeliveryServiceModule = DeliveryServiceModule;
//# sourceMappingURL=deliver-service.module.js.map