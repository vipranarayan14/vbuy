import { StateModifier } from "./_types";
import { replaceItem } from "../utils";
import { requestUpdateList } from "../../api";
import { Item } from "../../components/list.types";

export const updateItem: StateModifier = (list, updateList) => async (
  id: number,
  data: Item["data"]
) => {
  const item = list.items.find(($item) => $item.id === id);

  if (!item) return;

  const newData = Object.assign({}, { ...item.data }, { ...data });

  const newItem = Object.assign({}, { ...item }, { data: newData });

  const newItems = replaceItem(list.items, newItem);

  const newList = Object.assign({}, { ...list }, { items: newItems });

  updateList(newList);

  const isSuccess = await requestUpdateList(newList);

  if (!isSuccess) updateList(list);
};
