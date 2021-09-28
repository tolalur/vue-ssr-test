import { Injectable } from '@nestjs/common';
import {MockService} from '../_shared/mock.service';

@Injectable()
export class CategoryService {
  constructor(private mockService: MockService) {
  }

  getData(url: string) {
    return this.mockService.getCategoryMock(url)
  }
}
