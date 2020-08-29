import { requestDeleteItem } from "../../api";

import { removeItem } from "../utils";

import { StateModifier } from "./_types";

export const deleteItem: StateModifier = (list, updateList) => async (
  id: number
) => {
  const item = list[id];

  const isDeleted = await requestDeleteItem(item);

  if (isDeleted) {
    updateList(removeItem(list, id));
  }
};
