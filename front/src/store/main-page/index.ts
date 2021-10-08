import { withState } from '../helper';
import {ComputedPick, GoodsGridModel, MainBannerModel} from '../../models';
import { api } from '../../api';
import { ref } from 'vue';

interface IFullState extends ComputedPick<MainBannerModel, keyof MainBannerModel> {
  getState: () => MainBannerModel;
  fetchMainBanner: () => Promise<any>;
  resetState: () => void;
}

export function createMainPageStore() {
  const initStore = (): MainBannerModel => ({
    collection: {
      title: '',
      subtitle: '',
      url: '',
    },
    data: [] as GoodsGridModel[],
    recommendations: [] as GoodsGridModel[],
  });
  const state = ref<MainBannerModel>(initStore());

  const resetState = () => {
    state.value = initStore();
  };

  const getState = () => state;

  const fetchMainBanner = async () => {
    const { data } = await api.mainPage.getData();
    state.value = data;
  };

  return (): IFullState =>
    withState(
      {
        fetchMainBanner,
        getState,
        resetState,
      },
      state,
    );
}
