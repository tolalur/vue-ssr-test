import { computed, ComputedRef, ref } from "@vue/composition-api";
import { withState } from "../helper";
import {
  FilterModel,
  MenuModel,
  GoodsGridModel,
  CategoryModel
} from "../../models";
import { api } from "../../api";

interface IFullState extends CategoryModel {
  getData: (path: string) => Promise<any>;
  resetState: () => void;
  getState: () => CategoryModel;
}

export function createCategoryStore() {
  const initStore = (): CategoryModel => ({
    filters: [] as FilterModel[],
    breadCrumbs: [] as MenuModel[],
    data: [] as GoodsGridModel[]
  });

  const state = ref<CategoryModel>(initStore());

  const resetState = () => {
    state.value = initStore();
  };

  const getState = () => state;

  const getData = async (path: string) => {
    const { data } = await api.category.getData({ url: path });
    state.value = data;
  };

  return (): IFullState =>
    withState(
      {
        getState,
        resetState,
        getData
      },
      state
    );
}
