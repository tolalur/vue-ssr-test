import {GoodsGridModel} from './goods-grid.model';

export interface MainBannerTitle {
  title: string;
  subtitle: string;
  url: string;
}

export interface MainBannerModel {
  collection: MainBannerTitle;
  data: GoodsGridModel[];
  recommendations: GoodsGridModel[]
}
