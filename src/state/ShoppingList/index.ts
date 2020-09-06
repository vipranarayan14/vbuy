import { byBought } from "../utils";

import { addItem } from "./item-add";
import { deleteItem } from "./item-delete";
import { getList } from "./list-get";
import { updateItem } from "./item-update";

import { SetList, UpdateList } from "./_types";
import { List } from "../../components/list.types";

type ShoppingList = (
  list: List,
  setList: SetList
) => {
  addItem: (itemName: string) => void;
  deleteItem: (id: number) => void;
  getList: (listId: string) => void;
  updateItem: (id: number, data: object) => void;
};

export const ShoppingList: ShoppingList = (list, setList) => {
  const updateList: UpdateList = (newList) => {
    const newListSortedByBought = Object.assign(
      {},
      { ...newList },
      { items: newList.items.slice().sort(byBought) }
    );
    setList(newListSortedByBought);
  };

  return {
    addItem: addItem(list, updateList),
    deleteItem: deleteItem(list, updateList),
    getList: getList(list, updateList),
    updateItem: updateItem(list, updateList),
  };
};
