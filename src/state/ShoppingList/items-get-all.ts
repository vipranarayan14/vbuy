import { requestGetAllItems } from "../../api";

import { StateModifier } from "./_types";

export const getItems: StateModifier = (list, updateList) => async () => {
  const { data: $list } = await requestGetAllItems();

  updateList($list);
};
