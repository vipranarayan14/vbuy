import React, { useState } from "react";

import { ItemInput } from "./components/ItemInput";
import { List, ItemType } from "./components/List";

import styles from "./App.module.css";

const sampleList = [
  { name: "Item 1", bought: true },
  { name: "Item 2", bought: false },
];

const addItem = async (item: ItemType) => {
  const response = await fetch("/api/item-add", {
    method: "POST",
    body: JSON.stringify(item),
  });

  return response.status;
};

const replaceInList = (list: Array<any>, id: number, newItem: any) => [
  ...list.slice(0, id),
  newItem,
  ...list.slice(id + 1, list.length),
];

const byBought = (a: ItemType, b: ItemType) =>
  Number(a.bought) - Number(b.bought);

const App: React.FC = () => {
  const [list, setList] = useState<Array<ItemType>>([...sampleList]);

  const addToList = async (itemName: string) => {
    const item = { name: itemName, bought: false };

    const status = await addItem(item);

    if (status === 200) {
      setList(list.concat(item));
    }
  };

  const toggleBought = (id: number) => {
    const item = list[id];
    const newItem = Object.assign({}, item, { bought: !item.bought });

    setList(replaceInList(list, id, newItem).sort(byBought));
  };

  return (
    <div className={styles.App}>
      <header>
        <ItemInput addToList={addToList} />
      </header>
      <main>
        <List list={list} toggleBought={toggleBought} />
      </main>
    </div>
  );
};

export default App;
