import { Model } from 'mongoose';
import { BaseInterfaceRepository } from './base.interface.repository';
export declare abstract class BaseAbstractRepository<T> implements BaseInterfaceRepository<T> {
    private entity;
    protected constructor(entity: Model<T>);
    create(data: T | any): Promise<T>;
    findOneById(uuid: any): Promise<T>;
    findOneByCondition(filterCondition: any): Promise<T>;
    findByCondition(filterCondition: any): Promise<T[]>;
    findAll(): Promise<T[]>;
    remove(id: any): Promise<T>;
    getRepo(): Model<T>;
}
