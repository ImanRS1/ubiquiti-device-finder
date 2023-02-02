import { createContext, Dispatch, SetStateAction } from "react";

interface ListInfo {
  listView: boolean;
  setListView: Dispatch<SetStateAction<boolean>>;
}

export const ListViewContext = createContext({} as ListInfo);
