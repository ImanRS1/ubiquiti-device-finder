import { useState, useContext } from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";
import { GlobalState } from "@/context/GlobalState";
import FilterOption from "./FilterOption";

const theme = defaultTheme();

const FilterWindow = () => {
  const globalState = useContext(GlobalState);

  const allProductLines = globalState.devicesData?.devices
    .filter((product) => product.line.name !== "Unknown")
    .map((product) => product.line.name);

  const distinctProductLines = allProductLines?.filter(
    (n, i) => allProductLines.indexOf(n) === i
  );

  return (
    <FilterContainer>
      <FilterHeader>
        <p className="filter-text">Filter</p>
        <button
          onClick={() => globalState.setFilterWindow(!globalState.filterWindow)}
        >
          <img src="./icons/close-icon.svg" alt="A close icon" />
        </button>
      </FilterHeader>
      <FilterTitle>Product line</FilterTitle>
      <FilterOptionsContainer>
        {distinctProductLines?.map((productline) => (
          <FilterOption productline={productline} key={productline} />
        ))}
      </FilterOptionsContainer>
    </FilterContainer>
  );
};

const FilterOptionsContainer = styled.div`
  width: 208px;
  min-height: 192px;
`;

const FilterTitle = styled.div`
  width: 208px;
  height: 64px;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${theme.black85};
  font-size: 14px;
`;

const FilterHeader = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.grey6};

  .filter-text {
    font-family: ${theme.font1};
    color: ${theme.black65};
    margin: 0;
    margin-left: 24px;
    display: flex;
    align-items: center;
  }

  button {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 24px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  min-height: 336px;
  padding-bottom: 10px;
  box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.15);
  position: absolute;
  background-color: #ffffff;
  top: 0;
  right: 0;
`;

export default FilterWindow;
