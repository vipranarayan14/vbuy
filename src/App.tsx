import React, { useState, useEffect } from "react";

import { List as $List } from "./components/list.types";

import styles from "./App.module.css";

import { ShoppingList } from "./state/ShoppingList";

import { ItemInput } from "./components/ItemInput";
import { List } from "./components/List";

const isEmpty = (list: object) => !Object.keys(list).length;

const App: React.FC = () => {
  const [list, setList] = useState<$List>({} as $List);

  const shoppingList = ShoppingList(list, setList);

  useEffect(() => {
    shoppingList.getList("275383921178313222");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { addItem, deleteItem, updateItem } = shoppingList;

  return (
    <div className={styles.App}>
      <header>
        <ItemInput addItem={addItem} />
      </header>
      <main>
        {!isEmpty(list) && (
          <List list={list} updateItem={updateItem} deleteItem={deleteItem} />
        )}
      </main>
    </div>
  );
};

export default App;
