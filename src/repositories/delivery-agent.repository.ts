import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DeliveryAgent, DeliveryAgentDocument } from "src/delivery-agent/deliver-agent.model";
import { DeliveryAgentRepositoryInterface } from "src/delivery-agent/interface/repository.interface";
import { BaseAbstractRepository } from "./base/base.abstract.repository";

@Injectable()
export class DeliverAgentRepository extends BaseAbstractRepository<DeliveryAgentDocument> implements DeliveryAgentRepositoryInterface {

  constructor(
      @InjectModel(DeliveryAgent.name) private readonly model: Model<DeliveryAgentDocument>,
  ) {
    super(model);
  }

}