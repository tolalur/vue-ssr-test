import request from '../helpers/helper';
import {CategoryModel, CategoryRequest} from '../../models';

export const category = {
  getData: (data: CategoryRequest) =>
    request<CategoryModel>({
      url: 'category',
      method: 'post',
      data
    })
};
