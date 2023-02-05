import { Device, DevicesAPI } from "@/interfaces/devicesAPI.interface";
import { createContext, Dispatch, SetStateAction } from "react";

interface GlobalState {
  listView: boolean;
  setListView: Dispatch<SetStateAction<boolean>>;
  filterWindow: boolean;
  setFilterWindow: Dispatch<SetStateAction<boolean>>;
  filterOptions: string[];
  setFilterOptions: Dispatch<SetStateAction<string[]>>;
  devicesData: DevicesAPI;
  searchResult: Device[];
  setSearchResult: Dispatch<SetStateAction<Device[]>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const GlobalState = createContext({} as GlobalState);
