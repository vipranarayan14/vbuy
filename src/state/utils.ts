import { List } from "../components/List";
import { Item } from "../components/Item";

export const replaceItem = (list: List, id: number, newItem: any): List => [
  ...list.slice(0, id),
  newItem,
  ...list.slice(id + 1, list.length),
];

export const removeItem = (list: List, id: number) =>
  list.filter((item, $id) => $id !== id);

export const byBought = (a: Item, b: Item) =>
  Number(a.data.bought) - Number(b.data.bought);
