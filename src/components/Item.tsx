import React from "react";

import styles from "./List.module.css";

export type Item = {
  data: {
    name: string;
    bought: boolean;
  };
  ref: object;
  ts: number;
};

type ItemProps = {
  id: number;
  data: Item["data"];
  toggleBoughtForItem: (id: number) => void;
  deleteItem: (id: number) => void;
};

const styleIfBought = (isBought: boolean): string =>
  isBought ? styles.ListItemBought : "";

export const Item: React.FC<ItemProps> = ({
  id,
  data,
  toggleBoughtForItem,
  deleteItem,
}) => (
  <li
    className={`${styles.ListItem} ${styleIfBought(data.bought)}`}
    onClick={() => toggleBoughtForItem(id)}
  >
    {data.name} <button onClick={() => deleteItem(id)}>X</button>
  </li>
);
