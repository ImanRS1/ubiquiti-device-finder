import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { GlobalState } from "@/context/GlobalState";

export default function App({ Component, pageProps }: AppProps) {
  const [listView, setListView] = useState(true);
  const [filterWindow, setFilterWindow] = useState(false);
  const filterOptions = [""];

  return (
    <GlobalState.Provider
      value={{
        listView,
        setListView,
        filterWindow,
        setFilterWindow,
        filterOptions,
      }}
    >
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}
