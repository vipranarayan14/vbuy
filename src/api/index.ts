import { Item } from "../components/Item";

export const requestAddItem = async (item: Item["data"]): Promise<Item> => {
  const response = await fetch("/api/item-add", {
    method: "POST",
    body: JSON.stringify(item),
  });

  return response.json();
};

export const requestDeleteItem = async (item: Item): Promise<Boolean> => {
  const response = await fetch("/api/item-delete", {
    method: "DELETE",
    body: JSON.stringify(item),
  });

  return response.ok;
};

export const requestGetAllItems = async () => {
  const response = await fetch("/api/items-get-all");

  return response.json();
};
