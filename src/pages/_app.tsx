import "@/styles/globals.css";
import { useState } from "react";

import { GlobalState } from "@/context/GlobalState";
import { Device } from "@/interfaces/devicesAPI.interface";
import FetchDevicesData from "@/utils/fetchDeviceData";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [listView, setListView] = useState(true);
  const [filterWindow, setFilterWindow] = useState(false);
  const [filterOptions, setFilterOptions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<Device[]>([]);
  const devicesData = FetchDevicesData();

  return (
    <GlobalState.Provider
      value={{
        listView,
        setListView,
        filterWindow,
        setFilterWindow,
        filterOptions,
        setFilterOptions,
        searchValue,
        setSearchValue,
        searchResult,
        setSearchResult,
        devicesData,
      }}
    >
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}
