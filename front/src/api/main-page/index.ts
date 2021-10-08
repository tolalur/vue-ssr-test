import request from '../helpers/helper';
import { MainBannerModel } from '../../models';

export const mainPage = {
  getData: () =>
    request<MainBannerModel>({
      url: 'main-page',
      method: 'get',
    }),
};
