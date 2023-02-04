import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductsList";
import ProductsGrid from "@/components/ProductsGrid";
import { GlobalState } from "@/context/GlobalState";
import { useContext } from "react";
import Layout from "@/components/Layout";

export default function Home() {
  const globalState = useContext(GlobalState);

  console.log(globalState.searchValue, globalState.filterOptions);

  return (
    <Layout>
      <Navbar />
      {globalState.listView ? <ProductsList /> : <ProductsGrid />}
    </Layout>
  );
}
