import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductsList";
import ProductsGrid from "@/components/ProductsGrid";
import { GlobalState } from "@/context/GlobalState";
import { useContext, useEffect } from "react";
import Layout from "@/components/Layout";

export default function Home() {
  const globalState = useContext(GlobalState);
  const { searchValue, filterOptions, devicesData, setSearchResult } =
    globalState;

  useEffect(() => {
    if (filterOptions.length === 0) {
      setSearchResult(devicesData?.devices);

      if (searchValue.length > 0) {
        const searchedDevices = devicesData?.devices?.filter((product) => {
          if (
            product.product.name
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          ) {
            return product.product.name;
          }
        });
        setSearchResult(searchedDevices);
      }
    } else {
      const searchedProductLine = devicesData?.devices?.filter((product) => {
        return filterOptions.includes(product.line.name);
      });
      setSearchResult(searchedProductLine);

      if (searchValue.length > 0) {
        const searchedDevices = searchedProductLine?.filter((product) => {
          if (
            product.product.name
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          ) {
            return product.product.name;
          }
        });
        setSearchResult(searchedDevices);
      }
    }
  }, [searchValue, filterOptions, devicesData, setSearchResult]);

  return (
    <Layout>
      <Navbar />
      {globalState.listView ? <ProductsList /> : <ProductsGrid />}
    </Layout>
  );
}
