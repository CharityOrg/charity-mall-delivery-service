export declare class ResponseDTO<T> {
    status: boolean;
    data: T;
    message: string;
    extra_data: any;
    code: number;
    getResponse: () => this;
}
