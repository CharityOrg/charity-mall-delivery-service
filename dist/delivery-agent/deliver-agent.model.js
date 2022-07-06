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
exports.DeliveryAgentSchema = exports.DeliveryAgent = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const DeliveryAgent_dto_1 = require("../dto/DeliveryAgent.dto");
let DeliveryAgent = class DeliveryAgent {
    constructor() {
        this.platform_id = "1";
    }
};
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], DeliveryAgent.prototype, "uuid", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], DeliveryAgent.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(Number),
    __metadata("design:type", Number)
], DeliveryAgent.prototype, "ratings", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], DeliveryAgent.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], DeliveryAgent.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(String),
    __metadata("design:type", String)
], DeliveryAgent.prototype, "platform_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], DeliveryAgent.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], DeliveryAgent.prototype, "updated_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(Date),
    __metadata("design:type", Date)
], DeliveryAgent.prototype, "deleted_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(Object),
    __metadata("design:type", DeliveryAgent_dto_1.DeliveryAgentLocationDTO)
], DeliveryAgent.prototype, "location", void 0);
DeliveryAgent = __decorate([
    (0, mongoose_1.Schema)()
], DeliveryAgent);
exports.DeliveryAgent = DeliveryAgent;
exports.DeliveryAgentSchema = mongoose_1.SchemaFactory.createForClass(DeliveryAgent);
//# sourceMappingURL=deliver-agent.model.js.map