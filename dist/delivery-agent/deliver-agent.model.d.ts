/// <reference types="mongoose" />
import { DeliveryAgentLocationDTO } from "src/dto/DeliveryAgent.dto";
export declare type DeliveryAgentDocument = DeliveryAgent & Document;
export declare class DeliveryAgent {
    uuid: string;
    user_id: string;
    ratings: number;
    type: string;
    status: string;
    platform_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    location: DeliveryAgentLocationDTO;
}
export declare const DeliveryAgentSchema: import("mongoose").Schema<import("mongoose").Document<DeliveryAgent, any, any>, import("mongoose").Model<import("mongoose").Document<DeliveryAgent, any, any>, any, any, any>, {}>;
