import {MenuModel} from './menu.model';

export interface FilterModel {
  type: FilterType;
  title: string;
  data: MenuModel[];
  count?: number;
}

export enum FilterType {
  COLOR = 'color',
  SIZE = 'size',
  TEXT = 'text',
}
