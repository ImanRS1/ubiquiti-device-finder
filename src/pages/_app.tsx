import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { GlobalState } from "@/context/GlobalState";
import useSWR from "swr";

export default function App({ Component, pageProps }: AppProps) {
  const [listView, setListView] = useState(true);
  const [filterWindow, setFilterWindow] = useState(false);
  const [filterOptions, setFilterOptions] = useState([""]);
  const [searchValue, setSearchValue] = useState("");
  let devicesData = { devices: [] };

  const fetcher = async () =>
    await fetch("https://static.ui.com/fingerprint/ui/public.json").then(
      (res) => res.json()
    );

  function FetchDevicesData() {
    const { data, error } = useSWR("devices-data", fetcher);

    // if (error) return <div>Failed to load</div>;
    // if (!data) return <div>Loading...</div>;

    devicesData = data;
  }

  FetchDevicesData();

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
        devicesData,
      }}
    >
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}
