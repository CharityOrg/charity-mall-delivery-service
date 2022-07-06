import { GetRequestDTO, SendRequestDTO } from './../request.dto';
export interface BaseHTTPRequestInterface {
    getRequest(args: GetRequestDTO): any;
    sendRequest(args: SendRequestDTO): any;
}
