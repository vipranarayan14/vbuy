import React from "react";

import styles from "./List.module.css";

import { Item } from "./Item";

export type List = Array<Item>;

type ListProps = {
  list: List;
  toggleBoughtForItem: (id: number) => void;
  deleteItem: (id: number) => void;
};

export const List: React.FC<ListProps> = ({ list, ...props }) => (
  <ul>
    {list.map((item, id) => (
      <Item id={id} data={item.data} {...props} key={id} />
    ))}
  </ul>
);
