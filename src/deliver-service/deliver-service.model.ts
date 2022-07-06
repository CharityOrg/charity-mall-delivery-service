import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type DeliveryDocument = Delivery & Document;

@Schema()
export class Delivery {
    @Prop(String)
    item_id: string;
    @Prop(String)
    parent: string;
    @Prop(String)
    from_entity: string;
    @Prop(String)
    to_entity: string;
    @Prop(String)
    delivery_token: string;
    @Prop(String)
    delivery_agent: string;
    @Prop(Date)
    delivery_date: Date;
    @Prop(String)
    status: string;
    @Prop(String)
    platform_id: string = "1";
    @Prop(Date)
    created_at: Date;
    @Prop(Date)
    updated_at: Date;
    @Prop(Date)
    deleted_at: Date;
    @Prop(String)
    uuid: string;
    @Prop(String)
    giver_token: string;
    @Prop(String)
    receiver_token: string;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);