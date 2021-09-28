import { Injectable } from '@nestjs/common';
import {MockService} from '../_shared/mock.service';

@Injectable()
export class MainPageService {
  constructor(private mock: MockService) {
  }

  getData() {
    return this.mock.getMainPageMock()
  }
}
