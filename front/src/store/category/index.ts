import {withState} from '../helper';
import {
  FilterModel,
  MenuModel,
  GoodsGridModel,
  CategoryModel, ComputedPick
} from '../../models';
import {api} from '../../api';
import {ref} from 'vue';

interface IFullState extends ComputedPick<CategoryModel, keyof CategoryModel> {
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

  const getData = async (path: string[]) => {
    const {data} = await api.category.getData({url: path});
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
