import React from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";
import Link from "next/link";

const theme = defaultTheme();

const Product = (imageId: string, productLine: string, productName: string) => {
  return (
    <Link href={imageId}>
      <ProductRow>
        <FirstColumn>
          <img
            src={`https://static.ui.com/fingerprint/ui/icons/${imageId}_25x25.png`}
            alt={productName}
          />
        </FirstColumn>
        <SecondColumn>{productLine}</SecondColumn>
        <ThirdColumn>{productName}</ThirdColumn>
      </ProductRow>
    </Link>
  );
};

const ProductsList = () => {
  return (
    <Wrapper>
      <TitleRow>
        <FirstColumn>
          <div className="title-row">123 devices</div>
        </FirstColumn>
        <SecondColumn>
          <div className="title-row">PRODUCT LINE</div>
        </SecondColumn>
        <ThirdColumn>
          <div className="title-row">NAME</div>
        </ThirdColumn>
      </TitleRow>
      {Product(
        "06a25b40-ef1f-463a-82d9-13236866ea3d",
        "UniFi",
        "Access Point WiFi 6 In-wall"
      )}
      {Product("0d482159-5482-4cf7-b8ab-cfd1c798bab9", "airMAX", "airCube AC")}
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
      {Product("0d482159-5482-4cf7-b8ab-cfd1c798bab9", "airMAX", "airCube AC")}
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
      {Product("0d482159-5482-4cf7-b8ab-cfd1c798bab9", "airMAX", "airCube AC")}
      {Product(
        "fe65d707-1bdb-46a3-b79b-bd600150226e",
        "UniFi LTE",
        "UniFi LTE"
      )}
    </Wrapper>
  );
};

const ThirdColumn = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.font1};
  font-size: 14px;
  flex-grow: 1;
  font-weight: 400;
  color: ${theme.black65};

  .title-row {
    font-weight: 700;
  }
`;

const SecondColumn = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.font1};
  font-weight: 400;
  font-size: 14px;
  color: ${theme.black65};
  width: 251px;
  height: 100%;

  .title-row {
    font-weight: 700;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.font1};
  font-size: 12px;
  color: ${theme.grey4};
  width: 140px;
  height: 100%;
`;

const ProductRow = styled.div`
  margin-right: 24px;
  display: flex;
  height: 33px;
  border-bottom: solid ${theme.grey3} 1px;

  &:hover {
    background-color: ${theme.grey5};
    cursor: pointer;
  }
`;

const TitleRow = styled.div`
  width: 100%;
  display: flex;
  height: 33px;
  border-bottom: solid ${theme.grey3} 1px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1262px;
  min-height: 561px;
  margin: 23px auto 80px auto;

  a {
    text-decoration: none;
  }
`;

export default ProductsList;
