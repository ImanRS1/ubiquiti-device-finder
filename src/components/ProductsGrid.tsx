import React from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";
import Link from "next/link";

const theme = defaultTheme();

const Product = (imageId: string, productLine: string, productName: string) => {
  return (
    <Link href={imageId}>
      <ProductContainer>
        <div className="image-container">
          <img
            src={`https://static.ui.com/fingerprint/ui/icons/${imageId}_129x129.png`}
            alt={productName}
          />
        </div>
        <div className="info-container">
          {productName}
          <span>{productLine}</span>
        </div>
      </ProductContainer>
    </Link>
  );
};

const ProductsGrid = () => {
  return (
    <Wrapper>
      <TitleRow>
        <FirstColumn>123 devices</FirstColumn>
      </TitleRow>
      <ProductsWrapper>
        {Product(
          "06a25b40-ef1f-463a-82d9-13236866ea3d",
          "UniFi",
          "Access Point WiFi 6 In-wall"
        )}
        {Product(
          "0d482159-5482-4cf7-b8ab-cfd1c798bab9",
          "airMAX",
          "airCube AC"
        )}
        {Product(
          "fe65d707-1bdb-46a3-b79b-bd600150226e",
          "UniFi LTE",
          "UniFi LTE"
        )}
        {Product(
          "06a25b40-ef1f-463a-82d9-13236866ea3d",
          "UniFi",
          "Access Point WiFi 6 In-wall"
        )}
        {Product(
          "0d482159-5482-4cf7-b8ab-cfd1c798bab9",
          "airMAX",
          "airCube AC"
        )}
        {Product(
          "fe65d707-1bdb-46a3-b79b-bd600150226e",
          "UniFi LTE",
          "UniFi LTE"
        )}
        {Product(
          "06a25b40-ef1f-463a-82d9-13236866ea3d",
          "UniFi",
          "Access Point WiFi 6 In-wall"
        )}
        {Product(
          "0d482159-5482-4cf7-b8ab-cfd1c798bab9",
          "airMAX",
          "airCube AC"
        )}
        {Product(
          "fe65d707-1bdb-46a3-b79b-bd600150226e",
          "UniFi LTE",
          "UniFi LTE"
        )}
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
  margin: 5.5px 47.5px 0 57.5px;

  a {
    text-decoration: none;
  }
`;

export default ProductsGrid;
