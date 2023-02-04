import { DevicesAPI } from "@/interfaces/devicesAPI.interface";
import { createContext, Dispatch, SetStateAction } from "react";

interface GlobalState {
  listView: boolean;
  setListView: Dispatch<SetStateAction<boolean>>;
  filterWindow: boolean;
  setFilterWindow: Dispatch<SetStateAction<boolean>>;
  filterOptions: string[];
  setFilterOptions: Dispatch<SetStateAction<Array<string>>>;
  devicesData: DevicesAPI;
}

export const GlobalState = createContext({} as GlobalState);
