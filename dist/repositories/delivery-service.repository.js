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
exports.DeliverServiceRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const deliver_service_model_1 = require("../deliver-service/deliver-service.model");
const base_abstract_repository_1 = require("./base/base.abstract.repository");
let DeliverServiceRepository = class DeliverServiceRepository extends base_abstract_repository_1.BaseAbstractRepository {
    constructor(deliverServiceModel) {
        super(deliverServiceModel);
        this.deliverServiceModel = deliverServiceModel;
    }
};
DeliverServiceRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(deliver_service_model_1.Delivery.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DeliverServiceRepository);
exports.DeliverServiceRepository = DeliverServiceRepository;
//# sourceMappingURL=delivery-service.repository.js.map