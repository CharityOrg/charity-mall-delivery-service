import { Model } from "mongoose";
import { DeliveryDocument } from "../deliver-service/deliver-service.model";
import { DeliveryServiceRepositoryInterface } from "../deliver-service/interface/repository.interface";
import { BaseAbstractRepository } from "./base/base.abstract.repository";
export declare class DeliverServiceRepository extends BaseAbstractRepository<DeliveryDocument> implements DeliveryServiceRepositoryInterface {
    private readonly deliverServiceModel;
    constructor(deliverServiceModel: Model<DeliveryDocument>);
}
