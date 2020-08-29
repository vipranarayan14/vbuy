import { StateModifier } from "./_types";
import { replaceItem } from "../utils";

export const updateItem: StateModifier = (list, updateList) => (id: number) => {
  const item = list[id];

  const newItem = JSON.parse(JSON.stringify(item));

  newItem.data.bought = !newItem.data.bought;

  const newList = replaceItem(list, id, newItem);

  updateList(newList);
};
