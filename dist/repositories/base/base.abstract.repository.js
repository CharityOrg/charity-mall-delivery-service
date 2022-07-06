"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAbstractRepository = void 0;
class BaseAbstractRepository {
    constructor(entity) {
        this.entity = entity;
    }
    async create(data) {
        const _model = new this.entity(data);
        await _model.save();
        return _model;
    }
    async findOneById(uuid) {
        return await this.entity.findOne({ uuid: uuid });
    }
    async findOneByCondition(filterCondition) {
        return await this.entity.findOne().or(filterCondition);
    }
    async findByCondition(filterCondition) {
        return await this.entity.find().or(filterCondition);
    }
    async findAll() {
        return await this.entity.find();
    }
    async remove(id) {
        const _model = this.entity.findOne(id);
        return await _model.deleteOne();
    }
    getRepo() {
        return this.entity;
    }
}
exports.BaseAbstractRepository = BaseAbstractRepository;
//# sourceMappingURL=base.abstract.repository.js.map