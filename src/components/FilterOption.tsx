import React from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";
import { GlobalState } from "@/context/GlobalState";

const theme = defaultTheme();

interface filterProps {
  productline: string;
}

const FilterOption = (props: filterProps) => {
  return (
    <FilterOptionWrapper>
      <input type="checkbox" className="check_box" id={props.productline} />
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
