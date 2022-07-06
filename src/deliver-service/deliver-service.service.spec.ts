import { Test, TestingModule } from '@nestjs/testing';
import { MockRepo } from '../../test/mocks/repo.mock';
import { DeliveryServiceDTO } from './../dto/DeliveryService.dto';
import { ResponseDTO } from './../dto/response.dto';
import { statusEnum } from './../enums/util.enum';
import { DeliveryService } from './deliver-service.service';

describe('DeliveryServiceService', () => {
  let service: DeliveryService;

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
      providers: [
        DeliveryService,
        // {
        //   provide: getModelToken('Delivery'),
        //   useValue: mockModel,
        // },
        {
          provide: 'DeliveryServiceRepositoryInterface',
          useValue: deliveryServiceMockRepo,
        }
      ],
    }).compile();

    service = module.get<DeliveryService>(DeliveryService);
  });

  it('Delivery should be created', async () => {
    expect(service.createDelivery).toBeDefined();
    const _delivery: ResponseDTO<DeliveryServiceDTO> = await service.createDelivery(deliveryDataModel);
    expect(_delivery.code).toEqual(statusEnum.successful);
    expect(_delivery.data).toEqual(deliveryDataModel);
  });
  it('should get one delivery', async () => {
    expect(service.getDelivery).toBeDefined();
    //create item
    let _tmpDelivery: ResponseDTO<DeliveryServiceDTO> = await service.createDelivery(deliveryDataModel);
    //get item
    const _delivery: ResponseDTO<DeliveryServiceDTO> = await service.getDelivery(_tmpDelivery.data.uuid);
    
    expect(_delivery.code).toEqual(statusEnum.ok);
    expect(_delivery.data).toEqual(_tmpDelivery.data);
  });
  it('should get multiple deliveries', async () => {
    expect(service.getDeliveries).toBeDefined();
    //create item
    let _tmpDelivery: ResponseDTO<DeliveryServiceDTO> = await service.createDelivery(deliveryDataModel);
    
    const _delivery: ResponseDTO<DeliveryServiceDTO[]> = await service.getDeliveries();
    
    expect(_delivery.code).toEqual(statusEnum.ok);
    expect(_delivery.data.length).toBeGreaterThan(0);
  });
  it('should delete delivery', async () => {
    expect(service.deleteDelivery).toBeDefined();
    //create item
    let _tmpDelivery: ResponseDTO<DeliveryServiceDTO> = await service.createDelivery(deliveryDataModel);
    
    const _delivery: ResponseDTO<boolean> = await service.deleteDelivery(_tmpDelivery.data.uuid);
    expect(_delivery.code).toEqual(statusEnum.successful);
    expect(_delivery.data).toEqual(true);
  });
  it('update delivery: add receiver token', async () => {
    //create item
    let _tmpDelivery: ResponseDTO<DeliveryServiceDTO> = await service.createDelivery(deliveryDataModel);
    
    const result = await service.updateDeliveryGiverToken(_tmpDelivery.data.uuid, "99999");
    
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data.giver_token).toEqual("99999");
  });
  it('update delivery: add giver token', async () => {
    //create item
    let _tmpDelivery: ResponseDTO<DeliveryServiceDTO> = await service.createDelivery(deliveryDataModel);
    
    const result = await service.updateDeliveryReceiverToken(_tmpDelivery.data.uuid, "444444");
    
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data.receiver_token).toEqual("444444");
  });
  it('verify delivery token ', async () => {
    //create item
    let _tmpDelivery: ResponseDTO<DeliveryServiceDTO> = await service.createDelivery(deliveryDataModel);
    

    const result = await service.updateDeliveryReceiverToken(_tmpDelivery.data.uuid, "444444");
    const giverResult = await service.updateDeliveryGiverToken(_tmpDelivery.data.uuid, "99999");
    
    const giverVerify = await service.verifyDeliveryToken(_tmpDelivery.data.uuid, "99999", 'giver');
    const receiverVerify = await service.verifyDeliveryToken(_tmpDelivery.data.uuid, "444444", 'receiver');
    const wrongVerify = await service.verifyDeliveryToken(_tmpDelivery.data.uuid, "444444", 'giver');
    
    expect(giverVerify.code).toEqual(statusEnum.successful);
    expect(receiverVerify.code).toEqual(statusEnum.successful);
    
    expect(giverVerify.data).toEqual(true);
    expect(receiverVerify.data).toEqual(true);
    expect(wrongVerify.data).toEqual(false);
  });
  it('update delivery change delivery location', async () => {
    //create item
    let _tmpDelivery: ResponseDTO<DeliveryServiceDTO> = await service.createDelivery(deliveryDataModel);
    
    const result = await service.updateDeliveryAgent(_tmpDelivery.data.uuid, "new-test-agent");
    
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data.delivery_agent).toEqual("new-test-agent");
  });
  it('update delivery receiver', async () => {
    //create item
    let _tmpDelivery: ResponseDTO<DeliveryServiceDTO> = await service.createDelivery(deliveryDataModel);
    
    const result = await service.updateDeliveryReceiver(_tmpDelivery.data.uuid, "new-test-agent");
    
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data.delivery_agent).toEqual("new-test-agent");
  });
});
