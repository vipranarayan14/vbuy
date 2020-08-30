import { StateModifier } from "./_types";
import { replaceItem } from "../utils";
import { requestUpdateItem } from "../../api";
import { Item } from "../../components/Item";

export const updateItem: StateModifier = (list, updateList) => async (
  refId: number,
  data: Item["data"]
) => {
  const itemId = list.findIndex((item) => item.ref["@ref"].id === refId);
  const item = list[itemId];
  const newItem = Object.assign({}, item, { data });

  const newList = replaceItem(list, itemId, newItem);

  updateList(newList);

  const isSuccess = await requestUpdateItem(refId, data);

  if (!isSuccess) updateList(list);
};
