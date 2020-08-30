import { Item } from "../components/Item";

export const requestAddItem = async (data: Item["data"]): Promise<Item> => {
  const response = await fetch("/api/item-add", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response.json();
};

export const requestDeleteItem = async (refId: number): Promise<Boolean> => {
  const response = await fetch("/api/item-delete", {
    method: "DELETE",
    body: JSON.stringify(refId),
  });

  return response.ok;
};

export const requestUpdateItem = async (refId: number, data: Item["data"]) => {
  const response = await fetch("/api/item-update", {
    method: "PATCH",
    body: JSON.stringify({ refId, data }),
  });

  return response.json();
};

export const requestGetAllItems = async () => {
  const response = await fetch("/api/items-get-all");

  return response.json();
};
