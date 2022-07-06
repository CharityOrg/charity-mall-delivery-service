import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AppHTTPRequestInterface } from "./app-request";
import { HTTPRequestBaseAbstract } from "./base/base-http-request.abstract";

@Injectable()
export class HTTPRequest extends HTTPRequestBaseAbstract implements AppHTTPRequestInterface {

  constructor(
        private readonly _httpService: HttpService,
  ) {
    super(_httpService);
  }

}