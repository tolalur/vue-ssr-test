import {FilterModel} from './filter.model';
import {MenuModel} from './menu.model';
import {GoodsGridModel} from './goods-grid.model';

export interface CategoryModel {
  filters: FilterModel[],
  breadCrumbs: MenuModel[],
  data: GoodsGridModel[]
}

export interface CategoryRequest {
  url: string[]
}
