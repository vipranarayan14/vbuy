import { ItemType as Item, ListType as List } from "../components/List";

type setList = (list: List) => void;

type stateModifier = (list: List, setList: setList) => any;

const replaceItem = (list: List, id: number, newItem: any): List => [
  ...list.slice(0, id),
  newItem,
  ...list.slice(id + 1, list.length),
];

const byBought = (a: Item, b: Item) =>
  Number(a.data.bought) - Number(b.data.bought);

const addItem = async (item: Item["data"]): Promise<Item> => {
  const response = await fetch("/api/item-add", {
    method: "POST",
    body: JSON.stringify(item),
  });

  return response.json();
};

const getAllItems = async () => {
  const response = await fetch("/api/items-get-all");

  const { data } = await response.json();

  return data;
};

const updateList = (newList: List, setList: setList) =>
  setList(newList.slice().sort(byBought));

const add: stateModifier = (list, setList) => async (itemName: string) => {
  const item = await addItem({ name: itemName, bought: false });

  setList([item].concat(list));
};

const load = (setList: setList) => async () => {
  const list = await getAllItems();

  updateList(list, setList);
};

const toggleBought: stateModifier = (list, setList) => (id: number) => {
  const item = list[id];
  const newItem = Object.assign({}, item, { bought: !item.data.bought });

  updateList(replaceItem(list, id, newItem), setList);
};

export const ShoppingList: stateModifier = (list, setList) => ({
  add: add(list, setList),
  load: load(setList),
  toggleBoughtForItem: toggleBought(list, setList),
});
