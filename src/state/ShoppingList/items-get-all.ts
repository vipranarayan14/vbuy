import { requestGetAllItems } from "../../api";

import { StateModifier } from "./_types";
import { List } from "../../components/List";

export const getItems: StateModifier = (list, updateList) => async () => {
  const response = await requestGetAllItems();

  const isSuccess = response.ok;

  if (!isSuccess) return;

  const { data: $list }: { data: List } = await response.json();

  updateList($list);
};
