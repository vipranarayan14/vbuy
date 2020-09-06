import React, { useState } from "react";

import styles from "./List.module.css";

import { List as $List, Item as $Item } from "./list.types";

import { Item } from "./Item";

type Props = {
  list: $List;
  updateItem: (id: number, data: Partial<$Item["data"]>) => void;
  deleteItem: (id: number) => void;
};

export const List: React.FC<Props> = ({ list, updateItem, ...props }) => {
  const [itemToEdit, setItemToEdit] = useState<number | null>(null);

  const startEditing = (id: number) => setItemToEdit(id);
  const stopEditing = () => setItemToEdit(null);

  const toggleBought = (id: number, bought: boolean) =>
    updateItem(id, { bought });

  const updateName = (id: number, name: string) => {
    stopEditing();
    updateItem(id, { name });
  };

  return (
    <ul className={styles.List}>
      {list.items.map((item: $Item) => {
        const { id } = item;
        const isEditing = id === itemToEdit;

        return (
          <Item
            key={id}
            isEditing={isEditing}
            toggleBought={toggleBought}
            startEditing={startEditing}
            updateName={updateName}
            {...item}
            {...props}
          />
        );
      })}
    </ul>
  );
};
