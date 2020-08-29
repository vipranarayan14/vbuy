import React from "react";

import styles from "./List.module.css";

export type ItemType = {
  data: {
    name: string;
    bought: boolean;
  };
  ref: object;
  ts: number;
};

export type ListType = Array<ItemType>;

type ListProps = {
  list: ListType;
  toggleBought: (id: number) => void;
};

type ListItemProps = {
  id: number;
  data: ItemType["data"];
  toggleBought: ListProps["toggleBought"];
};

const styleIfBought = (isBought: boolean): string =>
  isBought ? styles.ListItemBought : "";

const ListItem: React.FC<ListItemProps> = ({ id, data, toggleBought }) => (
  <li
    className={`${styles.ListItem} ${styleIfBought(data.bought)}`}
    onClick={() => toggleBought(id)}
  >
    {data.name}
  </li>
);

export const List: React.FC<ListProps> = ({ list, ...props }) => (
  <ul>
    {list.map((item, id) => (
      <ListItem id={id} data={item.data} {...props} key={id} />
    ))}
  </ul>
);
