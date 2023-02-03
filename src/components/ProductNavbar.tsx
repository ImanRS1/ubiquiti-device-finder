import { useContext } from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";
import { GlobalState } from "@/context/GlobalState";
import FilterWindow from "./FilterWindow";
import Link from "next/link";

const theme = defaultTheme();

type ProductProps = {
  product: string | string[] | undefined;
};

const ProductNavbar = (props: ProductProps) => {
  return (
    <Wrapper>
      <div className="back-button">
        <Link href="/">
          <img src="./icons/left-chevron.svg" alt="A back icon" />
        </Link>
      </div>
      <div className="text">{props.product}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 48px;
  border-bottom: solid ${theme.grey3} 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.font1};
  position: relative;

  .back-button {
    position: absolute;
    left: 0;
    margin-left: 40px;
  }

  .text {
    font-size: 14px;
    color: ${theme.black45};
  }
`;

export default ProductNavbar;
