import { Model } from "mongoose";
import { DeliveryAgentDocument } from "src/delivery-agent/deliver-agent.model";
import { DeliveryAgentRepositoryInterface } from "src/delivery-agent/interface/repository.interface";
import { BaseAbstractRepository } from "./base/base.abstract.repository";
export declare class DeliverAgentRepository extends BaseAbstractRepository<DeliveryAgentDocument> implements DeliveryAgentRepositoryInterface {
    private readonly model;
    constructor(model: Model<DeliveryAgentDocument>);
}
