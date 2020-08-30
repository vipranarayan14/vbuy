import { requestAddItem } from "../../api";

import { StateModifier } from "./_types";
import { Item } from "../../components/Item";

export const addItem: StateModifier = (list, updateList) => async (
  itemName: string
) => {
  const data = { name: itemName, bought: false };

  const response = await requestAddItem(data);

  const isSuccess = response.ok;

  if (!isSuccess) return;

  const item: Item = await response.json();

  updateList([item].concat(list));
};
