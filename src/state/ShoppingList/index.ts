import { List } from "../../components/List";

import { byBought } from "../utils";

import { addItem } from "./item-add";
import { deleteItem } from "./item-delete";
import { getItems } from "./items-get-all";
import { updateItem } from "./item-update";

import { SetList, UpdateList } from "./_types";

type ShoppingList = (
  list: List,
  setList: SetList
) => {
  addItem: (itemName: string) => void;
  deleteItem: (id: number) => void;
  loadItems: () => void;
  updateItem: (id: number, data: object) => void;
};

export const ShoppingList: ShoppingList = (list, setList) => {
  const updateList: UpdateList = (newList) =>
    setList(newList.slice().sort(byBought));

  return {
    addItem: addItem(list, updateList),
    deleteItem: deleteItem(list, updateList),
    loadItems: getItems(list, updateList),
    updateItem: updateItem(list, updateList),
  };
};
