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
exports.ResponseDTO = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const util_enum_1 = require("./../enums/util.enum");
class ResponseDTO {
    constructor() {
        this.status = false;
        this.message = "";
        this.code = util_enum_1.statusEnum.failed;
        this.getResponse = () => {
            this.status = this.code > util_enum_1.statusEnum.failed;
            if (this.code == util_enum_1.statusEnum.error) {
                this.message = "An error occured";
                throw new common_1.InternalServerErrorException(this);
            }
            if (!this.status)
                throw new common_1.BadRequestException(this);
            console.log("here");
            return this;
        };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], ResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], ResponseDTO.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseDTO.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], ResponseDTO.prototype, "extra_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ResponseDTO.prototype, "code", void 0);
exports.ResponseDTO = ResponseDTO;
//# sourceMappingURL=response.dto.js.map