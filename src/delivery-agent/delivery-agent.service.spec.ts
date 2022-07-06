import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryServiceDTO } from 'src/dto/DeliveryService.dto';
import { MockRepo } from '../../test/mocks/repo.mock';
import { DeliveryAgentDTO } from '../dto/DeliveryAgent.dto';
import { DeliveryAgentStatus, statusEnum } from '../enums/util.enum';
import { DeliveryAgentService } from './delivery-agent.service';

describe('DeliveryAgentService', () => {
  let service: DeliveryAgentService;

  const deliveryAgent: DeliveryAgentDTO = {
    location: {
      latitude: 0.0,
      longitude: 0.0,
      location: "indiana street."
    },
    type: 'agent',
    user_id: '12345678',
  };

  let dataStore: DeliveryAgentDTO[] = [];
  
  beforeEach(async () => {

    const mockRepo =  new MockRepo<DeliveryServiceDTO>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeliveryAgentService,
        {
          provide: 'DeliveryAgentRepositoryInterface',
          useValue: mockRepo,
        }
      ],
    }).compile();

    service = module.get<DeliveryAgentService>(DeliveryAgentService);
  });

  it('should create delivery agent', async () => {
    expect(service.createAgent).toBeDefined();
    const agent = await service.createAgent(deliveryAgent);
    expect(agent.code).toEqual(statusEnum.successful);
    expect(agent.data.uuid).toBeDefined();
  });
  it('should update delivery agent location', async () => {
    const agent = await service.createAgent(deliveryAgent);
    const update = await service.updateAgentLocation(agent.data.uuid, {
      latitude: 1.0,
      longitude: 2.0,
      location: 'Saints Str.'
    });
    expect(update.code).toEqual(statusEnum.successful);
    expect(update.data.location.latitude).toEqual(1.0);
    expect(update.data.location.longitude).toEqual(2.0);
    expect(update.data.location.location).toEqual('Saints Str.');
  });
  it('should update delivery agent status', async () => {
    const agent = await service.createAgent(deliveryAgent);
    const update = await service.updateAgentStatus(agent.data.uuid, DeliveryAgentStatus.inactive);
    expect(update.code).toEqual(statusEnum.successful);
    expect(update.data).toEqual(true);
  });
  it('should get delivery agent', async () => {
    const agent = await service.createAgent(deliveryAgent);
    const getAgent = await service.getAgent(agent.data.uuid);
    
    expect(getAgent.code).toEqual(statusEnum.ok);
    expect(getAgent.data).toEqual(agent.data);
  });
  it('should get a list delivery agent(s)', async () => {
    const [firstAgent, secondAgent] = await Promise.all([
      service.createAgent(deliveryAgent),
      service.createAgent(deliveryAgent),
    ]);

    const getAgents = await service.getAgents();
    
    expect(getAgents.code).toEqual(statusEnum.ok);
    expect(getAgents.data).toContain(firstAgent.data);
    expect(getAgents.data).toContain(secondAgent.data);
  });
  
  it('should delete a delivery agent', async () => {
    const agent = await service.createAgent(deliveryAgent);
    const originalLength = (await service.getAgents()).data.length;
    const result = await service.deleteAgent(agent.data.uuid);
    const newLength = (await service.getAgents()).data.length;
    
    expect(result.code).toEqual(statusEnum.successful);
    expect(result.data).toEqual(true);
    expect(newLength).toBeLessThan(originalLength);
  });
});
