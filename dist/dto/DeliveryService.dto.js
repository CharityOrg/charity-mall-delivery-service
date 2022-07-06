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
exports.DeliveryReceiverUpdateDTO = exports.DeliveryServiceDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class DeliveryServiceDTO {
    constructor(init) {
        Object.assign(this, init);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "item_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "from_entity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "to_entity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "delivery_agent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "delivery_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], DeliveryServiceDTO.prototype, "delivery_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "parent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], DeliveryServiceDTO.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], DeliveryServiceDTO.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], DeliveryServiceDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "giver_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeliveryServiceDTO.prototype, "receiver_token", void 0);
exports.DeliveryServiceDTO = DeliveryServiceDTO;
class DeliveryReceiverUpdateDTO extends DeliveryServiceDTO {
    constructor(init) {
        super(init);
        Object.assign(this, init);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], DeliveryReceiverUpdateDTO.prototype, "receiver_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    __metadata("design:type", String)
], DeliveryReceiverUpdateDTO.prototype, "to_entity", void 0);
exports.DeliveryReceiverUpdateDTO = DeliveryReceiverUpdateDTO;
//# sourceMappingURL=DeliveryService.dto.js.map