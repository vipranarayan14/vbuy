import React, { useState } from "react";

import styles from "./ItemInput.module.css";

type EventObject = React.ChangeEvent<HTMLInputElement>;

type Props = {
  addItem: (itemName: string) => void;
};

export const ItemInput: React.FC<Props> = ({ addItem }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: EventObject) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    addItem(text);
    setText("");
  };

  return (
    <input
      type="text"
      className={styles.ItemInput}
      placeholder="New Item..."
      onChange={handleChange}
      onKeyPress={(e: any) => e.key === "Enter" && handleSubmit()}
      value={text}
      onSubmit={handleSubmit}
    />
  );
};
