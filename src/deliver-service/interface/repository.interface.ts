import { Model } from 'mongoose';
import { BaseInterfaceRepository } from './../../repositories/base/base.interface.repository';
import {DeliveryDocument}  from './../deliver-service.model';

export interface DeliveryServiceRepositoryInterface extends BaseInterfaceRepository<DeliveryDocument> {
}