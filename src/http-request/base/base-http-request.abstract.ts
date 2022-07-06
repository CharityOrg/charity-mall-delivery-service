import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Model } from 'mongoose';
import { catchError, lastValueFrom, map, Observable } from 'rxjs';
import { GetRequestDTO, SendRequestDTO } from '../request.dto';
import { BaseHTTPRequestInterface } from './base-http-request.inteface';

export abstract class HTTPRequestBaseAbstract implements BaseHTTPRequestInterface {
  private httpService: HttpService;
  
  protected constructor(_httpService: HttpService) {
    this.httpService = _httpService;
  }
  
  async getRequest({ url, options, }: GetRequestDTO): Promise<any> {
    return await lastValueFrom (this.httpService.get(url).pipe(
      map((response) => {
        return response.data;
      }),
      catchError((ex) => {
        return [{ ...ex.response?.data }];
      }),
    ));
  }
  async sendRequest({ url, data, options, method, }: SendRequestDTO): Promise<any> {
    if (method == 'post') {
      return await lastValueFrom (this.httpService.post(url, data, options).pipe(
      map((response) => response.data),
      catchError((ex) => {
          return [{ ...ex.response.data }];
      }),
      ));
  }
  if (method == 'put') {
      return await lastValueFrom (this.httpService.put(url, data, options).pipe(
      map((response) => response.data),
      catchError((ex) => {
          return [{ ...ex.response.data }];
      }),
      ));
  }
  if (method == 'delete') {
      if (data) {
      options['data'] = data;
      }
      return await lastValueFrom (this.httpService.delete(url, options).pipe(
      map((response) => response.data),
      catchError((ex) => {
          return [{ ...ex.response.data }];
      }),
      ));
  }
  }

  

}