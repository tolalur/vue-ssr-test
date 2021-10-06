import { createCategoryStore } from "./category";
import { createMainPageStore } from "./main-page";
import {reactive} from 'vue';

export const useCategory = createCategoryStore();
export const useMainPage = createMainPageStore();

export function _createStore() {
  const category = useCategory();
  const mainPage = useMainPage();

  category.resetState();
  mainPage.resetState();

  return reactive({
    category: category.getState(),
    mainPage: mainPage.getState()
  });
}
