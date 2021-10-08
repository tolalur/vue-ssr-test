import { Injectable } from '@nestjs/common';
import {MockService} from '../_shared/mock.service';
import {CategoryRequest} from '../../../common/data-models/category.model';

@Injectable()
export class CategoryService {
  constructor(private mockService: MockService) {
  }

  getCategoryData(categoryRequest: CategoryRequest) {
    return this.mockService.getCategoryMock(categoryRequest)
  }
}
