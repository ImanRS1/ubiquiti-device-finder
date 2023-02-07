import { useContext } from "react";

import styled from "styled-components";

import { GlobalState } from "@/context/GlobalState";
import defaultTheme from "@/themes/defaultTheme";

const theme = defaultTheme();

interface FilterProps {
  productline: string;
}

const FilterOption = (props: FilterProps) => {
  const globalState = useContext(GlobalState);
  const { filterOptions, setFilterOptions } = globalState;

  const handleClick = (productline: string) => {
    if (filterOptions?.includes(productline)) {
      setFilterOptions(
        filterOptions.filter((option) => option !== productline)
      );
      return;
    }

    setFilterOptions(filterOptions?.concat(productline));
  };

  return (
    <FilterOptionWrapper>
      <input
        type="checkbox"
        className="check_box"
        defaultChecked={filterOptions?.includes(props.productline)}
        id={props.productline}
        onClick={() => handleClick(props.productline)}
      />

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

  &:hover {
    background-color: ${theme.grey5};
    cursor: pointer;
  }

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
    margin-left: 23.5px;
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

  ${theme.breakpoints.mobile} {
    .product-text {
      width: 110px;
    }

    .check_box + label {
      margin-left: 13.5px;
    }
  }
`;
export default FilterOption;
