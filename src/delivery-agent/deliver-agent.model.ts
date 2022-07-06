import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { DeliveryAgentLocationDTO } from "src/dto/DeliveryAgent.dto";

export type DeliveryAgentDocument = DeliveryAgent & Document;

@Schema()
export class DeliveryAgent {
    @Prop(String)
    uuid: string;
    @Prop(String)
    user_id: string;
    @Prop(Number)
    ratings: number;
    @Prop(String)
    type: string;
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
    @Prop(Object)
    location: DeliveryAgentLocationDTO;
}

export const DeliveryAgentSchema = SchemaFactory.createForClass(DeliveryAgent);