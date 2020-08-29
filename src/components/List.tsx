import React from "react";

import styles from "./List.module.css";

import { Item } from "./Item";

export type ListType = Array<ItemType>;

type ListProps = {
  list: List;
  toggleBoughtForItem: (id: number) => void;
  list: ListType;
  toggleBought: (id: number) => void;
};

export const List: React.FC<ListProps> = ({ list, ...props }) => (
  <ul>
    {list.map((item, id) => (
      <ListItem id={id} data={item.data} {...props} key={id} />
    ))}
  </ul>
);
