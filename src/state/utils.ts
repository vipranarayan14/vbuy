import { List, Item } from "../components/list.types";

type Items = List["items"];

const getItemIndex = (items: Items, id: number) =>
  items.findIndex((item) => item.id === id);

export const replaceItem = (items: Items, newItem: Item): Items => {
  const index = getItemIndex(items, newItem.id);

  return [
    ...items.slice(0, index),
    newItem,
    ...items.slice(index + 1, items.length),
  ];
};

export const removeItem = (items: Items, id: number) =>
  items.filter((item) => item.id !== id);

export const byBought = (a: Item, b: Item) =>
  Number(a.data.bought) - Number(b.data.bought);

export const newId = () =>
  parseInt((Math.random() * performance.now()).toString());
