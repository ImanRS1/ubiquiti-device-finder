import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ListViewContext } from "@/context/ListViewContext";

export default function App({ Component, pageProps }: AppProps) {
  const [listView, setListView] = useState(true);

  return (
    <ListViewContext.Provider value={{ listView, setListView }}>
      <Component {...pageProps} />
    </ListViewContext.Provider>
  );
}
