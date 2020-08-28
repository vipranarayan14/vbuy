import React, { useState } from "react";

import { ItemInput } from "./components/ItemInput";
import { List, ItemType } from "./components/List";

import styles from "./App.module.css";

const sampleList = [
  { name: "Item 1", bought: true },
  { name: "Item 2", bought: false },
];

const replaceInList = (list: Array<any>, id: number, newItem: any) => [
  ...list.slice(0, id),
  newItem,
  ...list.slice(id + 1, list.length),
];

const byBought = (a: ItemType, b: ItemType) =>
  Number(a.bought) - Number(b.bought);

const App: React.FC = () => {
  const [list, setList] = useState<Array<ItemType>>([...sampleList]);

  const addToList = (itemName: string) =>
    setList(list.concat([{ name: itemName, bought: false }]));

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
