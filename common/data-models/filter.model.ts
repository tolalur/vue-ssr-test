import {MenuModel} from './menu.model';

export interface FilterModel {
  type: FilterType;
  title: string;
  data: MenuModel[];
  count?: number;
}

export class FilterType {
  static COLOR = 'color'
  static SIZE = 'size'
  static TEXT = 'text'
}
