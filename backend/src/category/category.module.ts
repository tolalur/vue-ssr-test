import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import {SharedModule} from '../_shared/shared.module';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [SharedModule]
})
export class CategoryModule {}
