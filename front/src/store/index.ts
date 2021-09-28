import Vue from "vue";
import VueCompositionAPI, { reactive } from "@vue/composition-api";
import { createCategoryStore } from "./category";
import { createMainPageStore } from "./main-page";

Vue.use(VueCompositionAPI);

export const useCategory = createCategoryStore();
export const useMainPage = createMainPageStore();

export function createStore() {
  const category = useCategory();
  const mainPage = useMainPage();

  category.resetState();
  mainPage.resetState();

  return reactive({
    category: category.getState(),
    mainPage: mainPage.getState()
  });
}
