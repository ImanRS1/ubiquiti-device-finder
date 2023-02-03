import { createContext, Dispatch, SetStateAction } from "react";

interface GlobalState {
  listView: boolean;
  setListView: Dispatch<SetStateAction<boolean>>;
  filterWindow: boolean;
  setFilterWindow: Dispatch<SetStateAction<boolean>>;
  filterOptions: string[];
}

export const GlobalState = createContext({} as GlobalState);
