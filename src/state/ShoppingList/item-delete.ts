import { requestDeleteItem } from "../../api";

import { removeItem } from "../utils";

import { StateModifier } from "./_types";

export const deleteItem: StateModifier = (list, updateList) => async (
  refId: number
) => {
  const isDeleted = await requestDeleteItem(refId);

  const itemId = list.findIndex((item) => item.ref["@ref"].id === refId);

  if (isDeleted) {
    updateList(removeItem(list, itemId));
  }
};
