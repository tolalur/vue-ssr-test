import {Module} from '@nestjs/common';
import { MainPageModule } from './main-page/main-page.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [MainPageModule, CategoryModule],
})
export class AppModule {}
