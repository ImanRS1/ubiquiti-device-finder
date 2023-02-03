import { useState, useContext } from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";
import { GlobalState } from "@/context/GlobalState";

const theme = defaultTheme();

interface filterProps {
  productline: string;
}

const FilterOption = (props: filterProps) => {
  const globalState = useContext(GlobalState);
  const { filterOptions, setFilterOptions } = globalState;

  const handleClick = (productline: string) => {
    if (filterOptions.includes(productline)) {
      setFilterOptions(
        filterOptions.filter((option) => option !== productline)
      );
      return;
    }
    filterOptions.push(productline);
  };

  return (
    <FilterOptionWrapper>
      {filterOptions.includes(props.productline) ? (
        <input
          type="checkbox"
          className="check_box"
          defaultChecked
          id={props.productline}
          onClick={() => handleClick(props.productline)}
        />
      ) : (
        <input
          type="checkbox"
          className="check_box"
          id={props.productline}
          onClick={() => handleClick(props.productline)}
        />
      )}

      <label htmlFor={props.productline}>
        <div className="product-text">{props.productline}</div>
      </label>
    </FilterOptionWrapper>
  );
};

const FilterOptionWrapper = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;

  .check_box {
    display: none;
  }

  .check_box + label {
    background: url("./icons/checkbox-unmarked.svg") no-repeat;
    height: 16px;
    width: 16px;
    display: inline-block;
    padding: 0 0 0 0px;
    cursor: pointer;
  }

  .check_box:checked + label {
    background: url("./icons/checkbox-marked.svg") no-repeat;
    height: 16px;
    width: 16px;
    display: inline-block;
    padding: 0 0 0 0px;
  }

  label {
    margin: 0;
    font-size: 14px;
    color: ${theme.black65};
  }

  .product-text {
    margin-left: 24px;
    width: 170px;
  }
`;
export default FilterOption;
