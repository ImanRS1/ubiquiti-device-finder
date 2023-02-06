import styled from "styled-components";
import Link from "next/link";

import defaultTheme from "@/themes/defaultTheme";

const theme = defaultTheme();

type ProductProps = {
  product: string | string[] | undefined;
};

const ProductNavbar = (props: ProductProps) => (
  <Wrapper>
    <div className="back-button">
      <Link href="/">
        <img src="./icons/left-chevron.svg" alt="A back icon" />
      </Link>
    </div>
    <div className="text">{props.product}</div>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
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

  ${theme.breakpoints.smallMobile} {
    .back-button {
      margin-left: 20px;
    }

    .text {
      margin: 0 50px;
    }
  }
`;

export default ProductNavbar;
