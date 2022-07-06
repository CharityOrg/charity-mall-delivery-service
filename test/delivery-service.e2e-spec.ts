import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { DeliveryServiceModule } from '../src/deliver-service/deliver-service.module';
import { MockRepo } from './mocks/repo.mock';
import { DeliveryServiceDTO } from 'src/dto/DeliveryService.dto';
import { getModelToken } from '@nestjs/mongoose';

describe('DeliveryController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const mockRepo =  new MockRepo<DeliveryServiceDTO>();
    
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        DeliveryServiceModule,
      ],
      providers: [
        {
          provide: ('DatabaseConnection'),
          useValue: mockRepo,
        },
        {
          provide: 'DeliveryServiceRepositoryInterface',
          useValue: mockRepo,
        },
      ]
    }).overrideProvider('DatabaseConnection').useValue({}).compile();

    

    // .overrideProvider('').useValue({
    //   provide: 'DeliveryAgentRepositoryInterface',
    //   useValue: mockRepo,
    // })

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/create Delivery (GET)', () => {
    return request(app.getHttpServer())
      .get('/create')
      .expect(200)
      .expect('Hello World!');
  });
});
