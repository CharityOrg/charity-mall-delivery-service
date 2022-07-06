"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryAgentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const delivery_agent_repository_1 = require("../repositories/delivery-agent.repository");
const deliver_agent_model_1 = require("./deliver-agent.model");
const delivery_agent_controller_1 = require("./delivery-agent.controller");
const delivery_agent_service_1 = require("./delivery-agent.service");
let DeliveryAgentModule = class DeliveryAgentModule {
};
DeliveryAgentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: deliver_agent_model_1.DeliveryAgent.name, schema: deliver_agent_model_1.DeliveryAgentSchema }]),
        ],
        controllers: [
            delivery_agent_controller_1.DeliveryAgentController
        ],
        providers: [
            delivery_agent_service_1.DeliveryAgentService,
            {
                provide: 'DeliveryAgentRepositoryInterface',
                useClass: delivery_agent_repository_1.DeliverAgentRepository,
            },
        ]
    })
], DeliveryAgentModule);
exports.DeliveryAgentModule = DeliveryAgentModule;
//# sourceMappingURL=delivery-agent.module.js.map