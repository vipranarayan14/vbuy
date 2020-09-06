import React, { useState } from "react";

import styles from "./List.module.css";
import { Item as $Item } from "./list.types";

type Props = $Item & {
  id: number;
  isEditing: boolean;
  toggleBought: (id: number, bought: boolean) => void;
  deleteItem: (id: number) => void;
  startEditing: (id: number) => void;
  updateName: (id: number, name: string) => void;
};

const styleIfBought = (isBought: boolean): string =>
  isBought ? styles.ListItemBought : "";

export const Item: React.FC<Props> = ({ id, data, ...props }) => {
  const [name, setName] = useState<string>(data.name);

  return (
    <li className={`${styles.ListItem} ${styleIfBought(data.bought)}`}>
      {props.isEditing ? (
        <>
          <input
            type="text"
            name="itemName"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <button onClick={() => props.updateName(id, name)}>Done</button>
        </>
      ) : (
        <>
          <span
            className={styles.ListItemText}
            onClick={() => props.toggleBought(id, !data.bought)}
          >
            {data.name}
          </span>{" "}
          <button onClick={() => props.startEditing(id)}>Edit</button>
          <button onClick={() => props.deleteItem(id)}>Delete</button>
        </>
      )}
    </li>
  );
};
