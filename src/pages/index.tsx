import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductsList";
import ProductsGrid from "@/components/ProductsGrid";
import { GlobalState } from "@/context/GlobalState";
import { useContext, useEffect } from "react";
import Layout from "@/components/Layout";
import { Device } from "@/interfaces/devicesAPI.interface";

export default function Home() {
  const globalState = useContext(GlobalState);
  const { searchValue, filterOptions, devicesData, setSearchResult } =
    globalState;

  const noFilterOptionsPicked = (filterOptions: string[]) =>
    filterOptions.length === 0;

  const searchValuesGiven = (searchValues: string) => searchValues.length > 0;

  useEffect(() => {
    const filterDevicesOnSearchInput = (productData: Device[]) => {
      return productData?.filter((device) => {
        if (
          device.product.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        ) {
          return device.product.name;
        }
      });
    };

    if (noFilterOptionsPicked(filterOptions)) {
      setSearchResult(devicesData?.devices);

      if (searchValuesGiven(searchValue)) {
        setSearchResult(filterDevicesOnSearchInput(devicesData?.devices));
      }
    } else {
      const searchedProductLine = devicesData?.devices?.filter((product) => {
        return filterOptions.includes(product.line.name);
      });
      setSearchResult(searchedProductLine);

      if (searchValuesGiven(searchValue)) {
        setSearchResult(filterDevicesOnSearchInput(searchedProductLine));
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
