import { useContext } from "react";

import styled from "styled-components";
import Link from "next/link";

import { Device } from "@/interfaces/devicesAPI.interface";
import { GlobalState } from "@/context/GlobalState";
import defaultTheme from "@/themes/defaultTheme";

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

      {devicesData?.devices?.map((device: Device) => (
        <Link href={device.icon.id} key={device.id}>
          <ProductRow>
            <FirstColumn className="desktop-view">
              <img
                src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_25x25.png`}
                alt={device.product.name}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "./images/defaultImage25.png";
                }}
              />
            </FirstColumn>
            <FirstColumn className="mobile-view">
              <img
                src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_51x51.png`}
                alt={device.product.name}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "./images/defaultImage51.png";
                }}
              />
            </FirstColumn>
            <SecondColumn>{device.line.name}</SecondColumn>
            <ThirdColumn>{device.product.name}</ThirdColumn>
          </ProductRow>
        </Link>
      ))}
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

  ${theme.breakpoints.mobile} {
    font-size: 13px;
    justify-content: flex-end;
    padding-left: 8px;
    box-sizing: border-box;
    text-align: right;

    .title-row {
      margin-right: 0;
    }
  }

  ${theme.breakpoints.smallMobile} {
    flex-grow: 0;
    width: 150px;
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

  ${theme.breakpoints.mobile} {
    width: auto;
    font-size: 13px;
  }

  ${theme.breakpoints.smallMobile} {
    flex-grow: 1;

    .title-row {
      white-space: nowrap;
    }
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

  ${theme.breakpoints.mobile} {
    width: 55px;
    margin-right: 150px;

    .title-row {
      text-align: center;
    }
  }

  ${theme.breakpoints.smallMobile} {
    margin-right: 50px;
  }
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

  .mobile-view {
    display: none;
  }

  ${theme.breakpoints.mobile} {
    height: 55px;
    margin-right: 0;
    justify-content: space-between;

    .mobile-view {
      display: flex;
    }

    .desktop-view {
      display: none;
    }
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

  ${theme.breakpoints.productsViewBreak} {
    width: 95vw;
  }

  ${theme.breakpoints.mobile} {
    width: 90vw;
  }
`;

export default ProductsList;
