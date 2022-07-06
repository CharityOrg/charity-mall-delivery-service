import { HttpService } from '@nestjs/axios';
import { GetRequestDTO, SendRequestDTO } from '../request.dto';
import { BaseHTTPRequestInterface } from './base-http-request.inteface';
export declare abstract class HTTPRequestBaseAbstract implements BaseHTTPRequestInterface {
    private httpService;
    protected constructor(_httpService: HttpService);
    getRequest({ url, options, }: GetRequestDTO): Promise<any>;
    sendRequest({ url, data, options, method, }: SendRequestDTO): Promise<any>;
}
