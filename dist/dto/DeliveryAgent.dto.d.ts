export declare class DeliveryAgentDTO {
    user_id?: string;
    ratings?: number;
    type?: string;
    status?: string;
    platform_id?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    location?: DeliveryAgentLocationDTO;
    uuid?: string;
}
export declare class DeliveryAgentLocationDTO {
    latitude: number;
    longitude: number;
    location: string;
}
