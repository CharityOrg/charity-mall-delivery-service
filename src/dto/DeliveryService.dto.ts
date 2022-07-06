import { ApiProperty } from "@nestjs/swagger";

export class DeliveryServiceDTO {
    constructor(init?: Partial<DeliveryServiceDTO>){
        Object.assign(this, init);
    }
    @ApiProperty()
    item_id?: string;
    @ApiProperty()
    from_entity?: string;
    @ApiProperty()
    to_entity?: string;
    @ApiProperty()
    delivery_agent?: string;
    @ApiProperty()
    delivery_token?: string;
    @ApiProperty()
    delivery_date?: Date;
    @ApiProperty()
    parent?: string;
    @ApiProperty()
    status?: string;
    @ApiProperty()
    created_at?: Date;
    @ApiProperty()
    updated_at?: Date;
    @ApiProperty()
    deleted_at?: Date;
    @ApiProperty()
    uuid?: string;
    @ApiProperty()
    giver_token?: string;
    @ApiProperty()
    receiver_token?: string;
}

export class DeliveryReceiverUpdateDTO extends DeliveryServiceDTO {
    constructor(init?: Partial<DeliveryReceiverUpdateDTO>){
        super(init);
        Object.assign(this, init);
    }
    @ApiProperty({
        required: true,
    })
    receiver_token: string;
    @ApiProperty({
        required: true,
    })
    to_entity: string;
}