import {ComputedRef} from '@vue/reactivity';

export { MainBannerTitle } from "../../../common/data-models/main-banner.model";
export { MainBannerModel } from "../../../common/data-models/main-banner.model";
export { GoodsGridModel } from "../../../common/data-models/goods-grid.model";
export { FilterType } from "../../../common/data-models/filter.model";
export { FilterModel } from "../../../common/data-models/filter.model";
export { CategoryModel, CategoryRequest } from "../../../common/data-models/category.model";
export { MenuModel } from "../../../common/data-models/menu.model";

export type ComputedPick<T, K extends keyof T> = {
  [P in K]: ComputedRef<T[P]>;
};
