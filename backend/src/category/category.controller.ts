import {Body, Controller, Post} from '@nestjs/common';
import { CategoryService } from './category.service';
import {CategoryRequest} from '../../../common/data-models/category.model';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  getCategoryData(@Body() categoryRequest: CategoryRequest) {
    return this.categoryService.getCategoryData(categoryRequest)
  }
}
