import { Module } from '@nestjs/common';
import { MainPageService } from './main-page.service';
import { MainPageController } from './main-page.controller';
import {SharedModule} from '../_shared/shared.module';

@Module({
  controllers: [MainPageController],
  providers: [MainPageService],
  imports: [SharedModule]
})
export class MainPageModule {}
