import { requestAddItem } from "../../api";

import { StateModifier } from "./_types";

export const addItem: StateModifier = (list, updateList) => async (
  itemName: string
) => {
  const item = await requestAddItem({ name: itemName, bought: false });

  updateList([item].concat(list));
};
