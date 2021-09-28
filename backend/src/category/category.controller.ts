import {Body, Controller, Post} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  getData(@Body() data: {url: string}) {
    return this.categoryService.getData(data.url)
  }
}
