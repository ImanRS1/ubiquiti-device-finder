import { useContext, useEffect } from "react";

import { GlobalState } from "@/context/GlobalState";
import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductsList";
import ProductsGrid from "@/components/ProductsGrid";
import Layout from "@/components/Layout";
import filterOnSearchInput from "@/utils/filterOnSearchInput";
import filterOnFilterOptions from "@/utils/filterOnFilterOptions";

export default function Home() {
  const globalState = useContext(GlobalState);
  const { searchValue, filterOptions, devicesData, setSearchResult } =
    globalState;

  const noFilterOptionsPicked = (filterOptions: string[]) =>
    filterOptions.length === 0;

  const searchValuesGiven = (searchValues: string) => searchValues.length > 0;

  useEffect(() => {
    if (noFilterOptionsPicked(filterOptions)) {
      setSearchResult(devicesData?.devices);

      if (searchValuesGiven(searchValue)) {
        setSearchResult(filterOnSearchInput(devicesData?.devices, searchValue));
      }
    } else {
      setSearchResult(
        filterOnFilterOptions(devicesData?.devices, filterOptions)
      );

      if (searchValuesGiven(searchValue)) {
        setSearchResult(
          filterOnSearchInput(
            filterOnFilterOptions(devicesData?.devices, filterOptions),
            searchValue
          )
        );
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
