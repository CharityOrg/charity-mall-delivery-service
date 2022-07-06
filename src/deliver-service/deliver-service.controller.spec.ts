import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryServiceDTO } from '../dto/DeliveryService.dto';
import { MockRepo } from '../../test/mocks/repo.mock';
import { DeliveryServiceController } from './deliver-service.controller';
import { DeliveryService } from './deliver-service.service';
import { DeliveryStatus, statusEnum } from '../enums/util.enum';

describe('DeliveryServiceController', () => {
  let controller: DeliveryServiceController;

  const deliveryDataModel: DeliveryServiceDTO = {
    created_at: new Date(),
    delivery_agent: "test",
    delivery_date: new Date(),
    delivery_token: "0000000",
    from_entity: "test-giver",
    to_entity: "test-receiver",
    item_id: "test-id",
    parent: "",
    uuid: "1234567",
    giver_token: "000000",
    receiver_token: "11111111",
  };

  beforeEach(async () => {
    let deliveryServiceMockRepo = new MockRepo<DeliveryServiceDTO>();
    
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryServiceController],
      providers: [
        DeliveryService,
        {
          provide: 'DeliveryServiceRepositoryInterface',
          useValue: deliveryServiceMockRepo,
        }
      ]
    }).compile();

    controller = module.get<DeliveryServiceController>(DeliveryServiceController);
  });

  it('should create delivery', async () => {
    const request = await controller.create(deliveryDataModel);
    expect(request.code).toEqual(statusEnum.successful);
    expect(request.data.uuid).toBeDefined();
  });

  it('should get all deliveries', async () => {
    const newDelivery = await controller.create(deliveryDataModel);
    
    const request = await controller.find();
    expect(request.code).toEqual(statusEnum.ok);
    expect(request.data.length).toBeGreaterThan(0);
  });
  
  it('should get a delivery', async () => {
    const newDelivery = await controller.create(deliveryDataModel);
    
    const request = await controller.get(newDelivery.data.uuid);
    expect(request.code).toEqual(statusEnum.ok);
    expect(request.data).toEqual(newDelivery.data);
  });

  it('should update a delivery giver token', async () => {
    const newDelivery = await controller.create(deliveryDataModel);
    
    const request = await controller.updateGiverToken(newDelivery.data.uuid, "123456");
    expect(request.code).toEqual(statusEnum.successful);
    expect(request.data.giver_token).toEqual("123456");
  });

  it('should update a delivery receiver token', async () => {
    const newDelivery = await controller.create(deliveryDataModel);
    
    const request = await controller.updateReceiverToken(newDelivery.data.uuid, "0987654");
    expect(request.code).toEqual(statusEnum.successful);
    expect(request.data.receiver_token).toEqual("0987654");
  });

  it('should update a delivery receiver token', async () => {
    const newDelivery = await controller.create(deliveryDataModel);
    const request = await controller.updateDeliveryStatus(newDelivery.data.uuid, DeliveryStatus.settled);
    expect(request.code).toEqual(statusEnum.successful);
    expect(request.data.status).toEqual(DeliveryStatus.settled);
  });

  it('should update a delivery receiver info', async () => {
    const newDelivery = await controller.create(deliveryDataModel);
    const request = await controller.updateDeliveryReceiver(newDelivery.data.uuid, {
      to_entity: 'test-123456',
      receiver_token: '123456',
    });
    expect(request.code).toEqual(statusEnum.successful);
    expect(request.data.to_entity).toEqual('test-123456');
    expect(request.data.receiver_token).toEqual('123456');
  });

  
});
