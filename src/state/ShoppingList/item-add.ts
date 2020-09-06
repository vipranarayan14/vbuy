import { requestUpdateList } from "../../api";

import { StateModifier } from "./_types";
import { List, Item } from "../../components/list.types";
import { newId } from "../utils";

export const addItem: StateModifier = (list, updateList) => async (
  itemName: string
) => {
  const item: Item = {
    id: newId(),
    data: {
      name: itemName,
      desc: "",
      bought: false,
    },
  };

  const newItems = [item].concat(list.items);

  const newList: List = Object.assign({}, { ...list }, { items: newItems });

  updateList(newList);

  const response = await requestUpdateList(newList);

  const isSuccess = response && response.ok;

  if (!isSuccess) updateList(list);
};
