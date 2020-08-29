import { List } from "../components/List";
import { Item } from "../components/Item";

const replaceItem = (list: List, id: number, newItem: any): List => [
  ...list.slice(0, id),
  newItem,
  ...list.slice(id + 1, list.length),
];

const removeItem = (list: List, id: number) =>
  list.filter((item, $id) => $id !== id);

const byBought = (a: Item, b: Item) =>
  Number(a.data.bought) - Number(b.data.bought);

const requestAddItem = async (item: Item["data"]): Promise<Item> => {
  const response = await fetch("/api/item-add", {
    method: "POST",
    body: JSON.stringify(item),
  });

  return response.json();
};

const requestDeleteItem = async (item: Item): Promise<Boolean> => {
  const response = await fetch("/api/item-delete", {
    method: "DELETE",
    body: JSON.stringify(item),
  });

  return response.ok;
};

const requestGetAllItems = async () => {
  const response = await fetch("/api/items-get-all");

  return response.json();
};

type setList = (list: List) => void;

type stateModifier = (list: List, setList: setList) => any;

const updateList = (newList: List, setList: setList) =>
  setList(newList.slice().sort(byBought));

const addItem: stateModifier = (list, setList) => async (itemName: string) => {
  const item = await requestAddItem({ name: itemName, bought: false });

  setList([item].concat(list));
};

const deleteItem: stateModifier = (list, setList) => async (id: number) => {
  const item = list[id];

  const isDeleted = await requestDeleteItem(item);

  if (isDeleted) {
    updateList(removeItem(list, id), setList);
  }
};

const loadItems: stateModifier = (list, setList) => async () => {
  const { data: $list } = await requestGetAllItems();

  updateList($list, setList);
};

const toggleBoughtForItem: stateModifier = (list, setList) => (id: number) => {
  const item = list[id];
  const newItem = Object.assign({}, item, { bought: !item.data.bought });

  updateList(replaceItem(list, id, newItem), setList);
};

type ShoppingList = (
  list: List,
  setList: setList
) => {
  addItem: (itemName: string) => void;
  deleteItem: (id: number) => void;
  loadItems: () => void;
  toggleBoughtForItem: (id: number) => void;
};

export const ShoppingList: ShoppingList = (list, setList) => ({
  addItem: addItem(list, setList),
  deleteItem: deleteItem(list, setList),
  loadItems: loadItems(list, setList),
  toggleBoughtForItem: toggleBoughtForItem(list, setList),
});
