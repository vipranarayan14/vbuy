import React, { useState } from "react";

import styles from "./List.module.css";

export type Item = {
  data: {
    name: string;
    bought: boolean;
  };
  ref: {
    "@ref": {
      id: number;
    };
  };
  ts: number;
};

type Props = {
  refId: number;
  data: Item["data"];
  isEditing: boolean;
  toggleBought: (refId: number) => void;
  deleteItem: (refId: number) => void;
  startEditing: (refId: number) => void;
  updateName: (refId: number, name: string) => void;
};

const styleIfBought = (isBought: boolean): string =>
  isBought ? styles.ListItemBought : "";

export const Item: React.FC<Props> = ({ refId, data, isEditing, ...props }) => {
  const [name, setName] = useState<string>(data.name);

  return (
    <li className={`${styles.ListItem} ${styleIfBought(data.bought)}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="itemName"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <button onClick={() => props.updateName(refId, name)}>Done</button>
        </>
      ) : (
        <>
          <span
            className={styles.ListItemText}
            onClick={() => props.toggleBought(refId)}
          >
            {data.name}
          </span>{" "}
          <button onClick={() => props.startEditing(refId)}>Edit</button>
          <button onClick={() => props.deleteItem(refId)}>Delete</button>
        </>
      )}
    </li>
  );
};
