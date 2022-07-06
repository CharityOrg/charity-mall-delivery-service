import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Delivery, DeliveryDocument } from "../deliver-service/deliver-service.model";
import { DeliveryServiceRepositoryInterface } from "../deliver-service/interface/repository.interface";
import { BaseAbstractRepository } from "./base/base.abstract.repository";

@Injectable()
export class DeliverServiceRepository extends BaseAbstractRepository<DeliveryDocument> implements DeliveryServiceRepositoryInterface {

  constructor(
      @InjectModel(Delivery.name) private readonly deliverServiceModel: Model<DeliveryDocument>,
  ) {
    super(deliverServiceModel);
  }

}