import { HttpService } from "@nestjs/axios";
import { AppHTTPRequestInterface } from "./app-request";
import { HTTPRequestBaseAbstract } from "./base/base-http-request.abstract";
export declare class HTTPRequest extends HTTPRequestBaseAbstract implements AppHTTPRequestInterface {
    private readonly _httpService;
    constructor(_httpService: HttpService);
}
