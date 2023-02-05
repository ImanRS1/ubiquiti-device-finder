import React from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";
import { GlobalState } from "@/context/GlobalState";
import { useContext } from "react";
import Link from "next/link";
import { Device } from "@/interfaces/devicesAPI.interface";

const theme = defaultTheme();

const ProductsList = () => {
  const globalState = useContext(GlobalState);
  const { searchResult } = globalState;

  const devicesData = { devices: searchResult };

  return (
    <Wrapper>
      <TitleRow>
        <FirstColumn>
          <div className="title-row">
            {devicesData?.devices?.length} devices
          </div>
        </FirstColumn>
        <SecondColumn>
          <div className="title-row">PRODUCT LINE</div>
        </SecondColumn>
        <ThirdColumn>
          <div className="title-row">NAME</div>
        </ThirdColumn>
      </TitleRow>

      {devicesData?.devices?.map((device: Device) => {
        return (
          <Link href={device.icon.id} key={device.id}>
            <ProductRow>
              <FirstColumn>
                <img
                  src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_25x25.png`}
                  alt={device.product.name}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://static.ui.com/fingerprint/ui/icons/98702c27-c680-4d23-bd75-155c7f07b013_25x25.png";
                  }}
                />
              </FirstColumn>
              <SecondColumn>{device.line.name}</SecondColumn>
              <ThirdColumn>{device.product.name}</ThirdColumn>
            </ProductRow>
          </Link>
        );
      })}
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
