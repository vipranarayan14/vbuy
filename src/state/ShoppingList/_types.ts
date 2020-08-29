import { List } from "../../components/List";

export type SetList = (list: List) => void;

export type UpdateList = (list: List) => void;

export type StateModifier = (list: List, updateList: UpdateList) => any;
