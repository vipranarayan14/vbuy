import { requestGetList } from "../../api";

import { StateModifier } from "./_types";
import { List } from "../../components/list.types";

export const getList: StateModifier = (_, updateList) => async (
  listId: string
) => {
  const response = await requestGetList(listId);

  if (!response) return;

  const list: List = await response.json();

  updateList(list);
};
