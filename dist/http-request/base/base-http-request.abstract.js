"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPRequestBaseAbstract = void 0;
const rxjs_1 = require("rxjs");
class HTTPRequestBaseAbstract {
    constructor(_httpService) {
        this.httpService = _httpService;
    }
    async getRequest({ url, options, }) {
        return await (0, rxjs_1.lastValueFrom)(this.httpService.get(url).pipe((0, rxjs_1.map)((response) => {
            return response.data;
        }), (0, rxjs_1.catchError)((ex) => {
            var _a;
            return [Object.assign({}, (_a = ex.response) === null || _a === void 0 ? void 0 : _a.data)];
        })));
    }
    async sendRequest({ url, data, options, method, }) {
        if (method == 'post') {
            return await (0, rxjs_1.lastValueFrom)(this.httpService.post(url, data, options).pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((ex) => {
                return [Object.assign({}, ex.response.data)];
            })));
        }
        if (method == 'put') {
            return await (0, rxjs_1.lastValueFrom)(this.httpService.put(url, data, options).pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((ex) => {
                return [Object.assign({}, ex.response.data)];
            })));
        }
        if (method == 'delete') {
            if (data) {
                options['data'] = data;
            }
            return await (0, rxjs_1.lastValueFrom)(this.httpService.delete(url, options).pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((ex) => {
                return [Object.assign({}, ex.response.data)];
            })));
        }
    }
}
exports.HTTPRequestBaseAbstract = HTTPRequestBaseAbstract;
//# sourceMappingURL=base-http-request.abstract.js.map