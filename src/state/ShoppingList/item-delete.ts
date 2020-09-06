import { requestUpdateList } from "../../api";

import { removeItem } from "../utils";

import { StateModifier } from "./_types";

export const deleteItem: StateModifier = (list, updateList) => async (
  id: number
) => {
  const newItems = removeItem(list.items, id);

  const newList = Object.assign({}, { ...list }, { items: newItems });

  updateList(newList);

  const isSuccess = await requestUpdateList(newList);

  if (!isSuccess) updateList(list);
};
