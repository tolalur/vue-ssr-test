import { withState } from "../helper";
import { GoodsGridModel, MainBannerModel } from "../../models";
import { api } from "../../api";
import {ref} from 'vue';

interface IFullState extends MainBannerModel {
  getState: () => MainBannerModel;
  getData: () => Promise<any>;
  resetState: () => void;
}

export function createMainPageStore() {
  const initStore = (): MainBannerModel => ({
    collection: {
      title: "",
      subtitle: "",
      url: ""
    },
    data: [] as GoodsGridModel[],
    recommendations: [] as GoodsGridModel[]
  });
  const state = ref<MainBannerModel>(initStore());

  const resetState = () => {
    state.value = initStore();
  };

  const getState = () => state;

  const getData = async () => {
    const { data } = await api.mainPage.getData();
    state.value = data;
  };

  return (): IFullState =>
    withState(
      {
        getData,
        getState,
        resetState
      },
      state
    );
}
