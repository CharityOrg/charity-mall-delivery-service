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
exports.HTTPRequest = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const base_http_request_abstract_1 = require("./base/base-http-request.abstract");
let HTTPRequest = class HTTPRequest extends base_http_request_abstract_1.HTTPRequestBaseAbstract {
    constructor(_httpService) {
        super(_httpService);
        this._httpService = _httpService;
    }
};
HTTPRequest = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], HTTPRequest);
exports.HTTPRequest = HTTPRequest;
//# sourceMappingURL=http-request.js.map