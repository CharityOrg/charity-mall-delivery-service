export declare class DeliveryServiceDTO {
    constructor(init?: Partial<DeliveryServiceDTO>);
    item_id?: string;
    from_entity?: string;
    to_entity?: string;
    delivery_agent?: string;
    delivery_token?: string;
    delivery_date?: Date;
    parent?: string;
    status?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    uuid?: string;
    giver_token?: string;
    receiver_token?: string;
}
export declare class DeliveryReceiverUpdateDTO extends DeliveryServiceDTO {
    constructor(init?: Partial<DeliveryReceiverUpdateDTO>);
    receiver_token: string;
    to_entity: string;
}
