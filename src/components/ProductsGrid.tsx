import { useContext } from "react";

import styled from "styled-components";
import Link from "next/link";

import { GlobalState } from "@/context/GlobalState";
import defaultTheme from "@/themes/defaultTheme";
import { Device } from "@/interfaces/devicesAPI.interface";

const theme = defaultTheme();

const ProductsGrid = () => {
  const globalState = useContext(GlobalState);
  const { searchResult } = globalState;

  const devicesData = { devices: searchResult };

  return (
    <Wrapper>
      <TitleRow>
        <FirstColumn>{devicesData?.devices?.length} devices</FirstColumn>
      </TitleRow>
      <ProductsWrapper>
        {devicesData?.devices?.map((device: Device) => (
          <ProductContainer key={device.id}>
            <Link href={device.icon.id}>
              <div className="image-container">
                <img
                  src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_129x129.png`}
                  alt={device.product.name}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "./images/defaultImage129.png";
                  }}
                />
              </div>
              <div className="info-container">
                {device.product.name}
                <span>{device.line.name}</span>
              </div>
            </Link>
          </ProductContainer>
        ))}
      </ProductsWrapper>
    </Wrapper>
  );
};

const ProductContainer = styled.div`
  width: 233px;
  height: 193px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${theme.grey6};
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  font-family: ${theme.font1};
  cursor: pointer;
  margin: 12px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .image-container {
    width: 232px;
    height: 124px;
    background-color: ${theme.grey1};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-container {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    height: 44px;
    color: ${theme.black65};

    span {
      font-size: 12px;
      color: ${theme.black45};
    }
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px 0 -12px;
  min-height: 300px;

  ${theme.breakpoints.productsViewBreak} {
    justify-content: center;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.font1};
  font-size: 12px;
  color: ${theme.grey4};
  width: 140px;
  height: 33px;
`;

const TitleRow = styled.div`
  width: 100%;
  display: flex;
  height: 33px;
`;

const Wrapper = styled.div`
  width: 1262px;
  margin: 5.5px auto 5.5px auto;

  a {
    text-decoration: none;
  }

  ${theme.breakpoints.productsViewBreak} {
    width: 95vw;
  }

  ${theme.breakpoints.mobile} {
    width: 90vw;
  }
`;

export default ProductsGrid;
