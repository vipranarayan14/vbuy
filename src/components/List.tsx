import React, { useState } from "react";

import styles from "./List.module.css";

import { Item } from "./Item";

export type List = Array<Item>;

type Props = {
  list: List;
  updateItem: (id: number, data: Item["data"]) => void;
  deleteItem: (id: number) => void;
};

type ToggleBought = (
  list: List,
  updateItem: Function
) => (refId: number) => void;

type UpdateName = (
  list: List,
  updateItem: Props["updateItem"],
  stopEditing: () => void
) => (refId: number, name: string) => void;

const toggleBought: ToggleBought = (list, updateItem) => (refId) => {
  const item = list.find((_item) => _item.ref["@ref"].id === refId);

  if (!item) return;

  const data = Object.assign({}, item.data, { bought: !item.data.bought });

  updateItem(refId, data);
};

const updateName: UpdateName = (list, updateItem, stopEditing) => (
  refId,
  name
) => {
  stopEditing();

  const item = list.find((_item) => _item.ref["@ref"].id === refId);

  if (!item) return;

  const nameUnchanged = name === item.data.name;

  if (nameUnchanged) return;

  const data = Object.assign({}, item.data, { name });

  updateItem(refId, data);
};

export const List: React.FC<Props> = ({ list, updateItem, ...props }) => {
  const [itemToEdit, setItemToEdit] = useState<number | null>(null);

  const startEditing = (id: number) => setItemToEdit(id);
  const stopEditing = () => setItemToEdit(null);

  return (
    <ul className={styles.List}>
      {list.map((item) => {
        const { data } = item;
        const refId = item.ref["@ref"].id;
        const isEditing = refId === itemToEdit;

        return (
          <Item
            key={refId}
            refId={refId}
            data={data}
            isEditing={isEditing}
            toggleBought={toggleBought(list, updateItem)}
            startEditing={startEditing}
            updateName={updateName(list, updateItem, stopEditing)}
            {...props}
          />
        );
      })}
    </ul>
  );
};
