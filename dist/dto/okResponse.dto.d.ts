import { Type } from "@nestjs/common";
export declare const OkListResponse: <TModel extends Type<any>>(model: TModel) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const OkResponse: <TModel extends Type<any>>(model: TModel, opts?: {
    type: string;
}) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const StatusResponse400: <TModel extends Type<any>>(model: TModel, type: string) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
