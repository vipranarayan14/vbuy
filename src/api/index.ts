import { Item } from "../components/Item";

export const requestAddItem = async (data: Item["data"]): Promise<Response> => {
  const response = await fetch("/api/item-add", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response;
};

export const requestDeleteItem = async (refId: number): Promise<Boolean> => {
  const response = await fetch("/api/item-delete", {
    method: "DELETE",
    body: JSON.stringify(refId),
  });

  return response.ok;
};

export const requestUpdateItem = async (
  refId: number,
  data: Item["data"]
): Promise<Boolean> => {
  const response = await fetch("/api/item-update", {
    method: "PATCH",
    body: JSON.stringify({ refId, data }),
  });

  return response.ok;
};

export const requestGetAllItems = async (): Promise<Response> => {
  const response = await fetch("/api/items-get-all");

  return response;
};
