import { StateModifier } from "./_types";
import { replaceItem } from "../utils";
import { requestUpdateItem } from "../../api";
import { Item } from "../../components/Item";

export const updateItem: StateModifier = (list, updateList) => async (
  refId: number,
  data: Item["data"]
) => {
  const updatedItem = await requestUpdateItem(refId, data);

  const itemId = list.findIndex((item) => item.ref["@ref"].id === refId);

  const newList = replaceItem(list, itemId, updatedItem);

  updateList(newList);
};
