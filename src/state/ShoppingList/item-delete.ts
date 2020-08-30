import { requestDeleteItem } from "../../api";

import { removeItem } from "../utils";

import { StateModifier } from "./_types";

export const deleteItem: StateModifier = (list, updateList) => async (
  refId: number
) => {
  const itemId = list.findIndex((item) => item.ref["@ref"].id === refId);

  updateList(removeItem(list, itemId));

  const isSuccess = await requestDeleteItem(refId);

  if (!isSuccess) updateList(list);
};
