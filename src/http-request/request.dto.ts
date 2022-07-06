export class SendRequestDTO {
    url : string;
    data: any;
    options?: any;
    method?: string;
}

export class GetRequestDTO {
    url : string;
    options?: any;
}