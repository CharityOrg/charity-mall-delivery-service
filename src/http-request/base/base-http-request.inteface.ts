
import {GetRequestDTO, SendRequestDTO} from './../request.dto';
export interface BaseHTTPRequestInterface {
    getRequest(args: GetRequestDTO);
  
    sendRequest(args: SendRequestDTO);
  }