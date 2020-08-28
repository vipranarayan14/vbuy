import React from "react";

import styles from "./List.module.css";

export interface ItemType {
  name: string;
  bought: boolean;
}

type ListProps = {
  list: Array<ItemType>;
  toggleBought: (id: number) => void;
};

type ListItemProps = {
  id: number;
  data: ItemType;
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
      <ListItem id={id} data={item} {...props} key={id} />
    ))}
  </ul>
);
