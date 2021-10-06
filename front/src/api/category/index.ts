import request from "../helpers/helper";
import { CategoryModel } from "../../models";

export const category = {
  getData: (data: { url: string[] }) =>
    request<CategoryModel>({
      url: "category",
      method: "post",
      data
    })
};
