import { List } from "../../components/list.types";

export type SetList = (list: List) => void;

export type UpdateList = (list: List) => void;

export type StateModifier = (list: List, updateList: UpdateList) => any;
