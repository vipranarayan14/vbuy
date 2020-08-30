import { requestAddItem } from "../../api";

import { StateModifier } from "./_types";

export const addItem: StateModifier = (list, updateList) => async (
  itemName: string
) => {
  const data = { name: itemName, bought: false };
  const item = await requestAddItem(data);

  updateList([item].concat(list));
};
