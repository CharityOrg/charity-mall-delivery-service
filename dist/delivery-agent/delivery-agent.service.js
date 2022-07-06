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
exports.DeliveryAgentService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const DeliveryAgent_dto_1 = require("../dto/DeliveryAgent.dto");
const response_dto_1 = require("../dto/response.dto");
const util_enum_1 = require("../enums/util.enum");
let DeliveryAgentService = class DeliveryAgentService {
    constructor(repository) {
        this.repository = repository;
    }
    async createAgent(payload) {
        const response = new response_dto_1.ResponseDTO();
        try {
            payload = Object.assign(Object.assign({}, payload), {
                created_at: new Date(),
                status: util_enum_1.DeliveryAgentStatus.active,
                uuid: (0, crypto_1.randomUUID)(),
            });
            if (!payload.location) {
                payload.location = new DeliveryAgent_dto_1.DeliveryAgentLocationDTO();
            }
            const result = await this.repository.create(payload);
            if (result) {
                response.data = payload;
                response.code = util_enum_1.statusEnum.successful;
            }
        }
        catch (e) {
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async updateAgent(id, payload) {
        const response = new response_dto_1.ResponseDTO();
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
                response.code = util_enum_1.statusEnum.failed;
                response.message = "Delivery Agent not found.";
            }
            else {
                response.code = util_enum_1.statusEnum.successful;
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
                await this.repository.getRepo().updateOne({ uuid: item.uuid }, item);
                response.data = item;
            }
        }
        catch (e) {
            console.log(e);
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async updateAgentStatus(id, status) {
        var response = new response_dto_1.ResponseDTO();
        response.data = false;
        try {
            this.updateAgent(id, { status: status });
            response.code = util_enum_1.statusEnum.successful;
            response.data = true;
            response.message = "Agent Status updated";
        }
        catch (e) {
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async updateAgentLocation(id, location) {
        var response = new response_dto_1.ResponseDTO();
        try {
            const agentUpdate = await this.updateAgent(id, { location: location });
            if (agentUpdate.code > util_enum_1.statusEnum.failed) {
                response.code = util_enum_1.statusEnum.successful;
                response.data = agentUpdate.data;
                response.message = "Agent location updated";
            }
            else {
                response = agentUpdate;
            }
        }
        catch (e) {
            console.log("e", e);
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async getAgent(id) {
        const response = new response_dto_1.ResponseDTO();
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
                response.code = util_enum_1.statusEnum.failed;
                response.message = "Delivery Agent not found.";
            }
            else {
                response.data = item;
                response.code = util_enum_1.statusEnum.ok;
            }
        }
        catch (e) {
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async getAgents() {
        const response = new response_dto_1.ResponseDTO();
        try {
            const items = await this.repository.findAll();
            if (items.length == null) {
                response.code = util_enum_1.statusEnum.failed;
                response.message = "Delivery Agent(s) not found.";
            }
            else {
                response.data = items;
                response.code = util_enum_1.statusEnum.ok;
            }
        }
        catch (e) {
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
    async deleteAgent(id) {
        var response = new response_dto_1.ResponseDTO();
        response.data = false;
        try {
            await this.repository.remove(id);
            response.code = util_enum_1.statusEnum.successful;
            response.data = true;
            response.message = "Agent deleted.";
        }
        catch (e) {
            console.log(e);
            response.code = util_enum_1.statusEnum.error;
            response.extra_data = e.toString();
        }
        return response;
    }
};
DeliveryAgentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DeliveryAgentRepositoryInterface')),
    __metadata("design:paramtypes", [Object])
], DeliveryAgentService);
exports.DeliveryAgentService = DeliveryAgentService;
//# sourceMappingURL=delivery-agent.service.js.map