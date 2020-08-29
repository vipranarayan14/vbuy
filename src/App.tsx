import React, { useState, useEffect } from "react";

import { ItemInput } from "./components/ItemInput";
import { List } from "./components/List";

import { ShoppingList } from "./state/ShoppingList";

import styles from "./App.module.css";

const App: React.FC = () => {
  const [list, setList] = useState<List>([]);

  const shoppingList = ShoppingList(list, setList);

  useEffect(() => {
    shoppingList.loadItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { toggleBoughtForItem, deleteItem } = shoppingList;

  return (
    <div className={styles.App}>
      <header>
        <ItemInput addToList={shoppingList.addItem} />
      </header>
      <main>
        <List
          list={list}
          toggleBoughtForItem={toggleBoughtForItem}
          deleteItem={deleteItem}
        />
      </main>
    </div>
  );
};

export default App;
