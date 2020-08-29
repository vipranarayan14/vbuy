import React, { useState, useEffect } from "react";

import { ItemInput } from "./components/ItemInput";
import { List, ListType } from "./components/List";

import { ShoppingList } from "./state/ShoppingItems";

import styles from "./App.module.css";

const App: React.FC = () => {
  const [list, setList] = useState<ListType>([]);

  const shoppingList = ShoppingList(list, setList);

  useEffect(() => {
    shoppingList.load();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.App}>
      <header>
        <ItemInput addToList={shoppingList.add} />
      </header>
      <main>
        <List list={list} toggleBought={shoppingList.toggleBoughtForItem} />
      </main>
    </div>
  );
};

export default App;
