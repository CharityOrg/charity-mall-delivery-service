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
exports.DeliverySchema = exports.Delivery = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Delivery = class Delivery {
    constructor() {
        this.platform_id = "1";
    }
};
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "item_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "parent", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "from_entity", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "to_entity", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "delivery_token", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "delivery_agent", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], Delivery.prototype, "delivery_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "platform_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], Delivery.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], Delivery.prototype, "updated_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], Delivery.prototype, "deleted_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "uuid", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "giver_token", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], Delivery.prototype, "receiver_token", void 0);
Delivery = __decorate([
    (0, mongoose_1.Schema)()
], Delivery);
exports.Delivery = Delivery;
exports.DeliverySchema = mongoose_1.SchemaFactory.createForClass(Delivery);
//# sourceMappingURL=deliver-service.model.js.map