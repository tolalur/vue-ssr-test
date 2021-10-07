import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {MainPageModule} from '../src/main-page/main-page.module';

describe('MainPageController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MainPageModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/main-page (GET)', () => {
    return request(app.getHttpServer())
      .get('/main-page')
      .expect(200)
      .expect((body) => body != null);
  });
});
