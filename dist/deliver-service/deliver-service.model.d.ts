/// <reference types="mongoose" />
export declare type DeliveryDocument = Delivery & Document;
export declare class Delivery {
    item_id: string;
    parent: string;
    from_entity: string;
    to_entity: string;
    delivery_token: string;
    delivery_agent: string;
    delivery_date: Date;
    status: string;
    platform_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    uuid: string;
    giver_token: string;
    receiver_token: string;
}
export declare const DeliverySchema: import("mongoose").Schema<import("mongoose").Document<Delivery, any, any>, import("mongoose").Model<import("mongoose").Document<Delivery, any, any>, any, any, any>, {}>;
