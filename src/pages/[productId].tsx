import { useContext, useState } from "react";

import styled from "styled-components";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import ProductNavbar from "@/components/ProductNavbar";
import defaultTheme from "@/themes/defaultTheme";
import { GlobalState } from "@/context/GlobalState";
import { Device } from "@/interfaces/devicesAPI.interface";

const theme = defaultTheme();

const renderUispSpecificRows = (device: Device) => (
  <DataRow>
    <div>Platform</div>
    <div>{device?.uisp?.firmware?.platform}</div>
  </DataRow>
);

const renderUnifiSpecificRows = (device: Device) => (
  <>
    {device?.unifi?.network?.radios?.na?.maxPower ? (
      <DataRow>
        <div>Max. power</div>
        <div>{device.unifi.network.radios.na.maxPower} W</div>
      </DataRow>
    ) : (
      ""
    )}

    {device?.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond ? (
      <DataRow>
        <div>Speed</div>
        <div>{device.unifi.network.ethernetMaxSpeedMegabitsPerSecond} Mbps</div>
      </DataRow>
    ) : (
      ""
    )}

    {device?.unifi?.network?.ports?.standard ||
    device?.unifi?.network?.numberOfPorts ? (
      <DataRow>
        <div>Number of ports</div>
        <div>
          {device.unifi.network.ports?.standard ||
            device.unifi.network.numberOfPorts}
        </div>
      </DataRow>
    ) : (
      ""
    )}
    {device?.unifi?.network?.minimumFirmwareRequired ? (
      <DataRow>
        <div>Minimum firmware</div>
        <div>{device.unifi.network.minimumFirmwareRequired}</div>
      </DataRow>
    ) : (
      ""
    )}
  </>
);

function ProductDetail() {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const { productId } = router.query;
  const globalState = useContext(GlobalState);
  const { devicesData } = globalState;

  const device = (devicesData?.devices?.filter(
    (device) => device.icon.id === productId
  ))[0];

  return (
    <Layout>
      <ProductNavbar product={device?.product?.name} />
      <Wrapper>
        <div className="img-container">
          {loaded ? null : (
            <img
              src="./images/defaultImage257.png"
              alt={device?.product?.name}
            />
          )}
          <img
            style={loaded ? {} : { display: "none" }}
            src={`https://static.ui.com/fingerprint/ui/icons/${productId}_257x257.png`}
            alt={device?.product?.name}
            onLoad={() => setLoaded(true)}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "./images/defaultImage257.png";
            }}
          />
        </div>
        <div className="product-container">
          {!device ? (
            <DataRow>No data found.</DataRow>
          ) : (
            <>
              <DataRow>
                <div>Product line</div>
                <div>{device.line?.name}</div>
              </DataRow>
              <DataRow>
                <div>ID</div>
                <div>{device.line?.id}</div>
              </DataRow>
              <DataRow>
                <div>Name</div>
                <div>{device.product?.name}</div>
              </DataRow>

              {device.shortnames?.[0] ? (
                <DataRow>
                  <div>Short names</div>
                  <div>
                    {device.shortnames.map((shortname) => `${shortname} `)}
                  </div>
                </DataRow>
              ) : (
                ""
              )}

              {device?.unifi && renderUnifiSpecificRows(device)}
              {device?.uisp?.firmware?.platform &&
                renderUispSpecificRows(device)}
            </>
          )}
        </div>
      </Wrapper>
    </Layout>
  );
}

const DataRow = styled.div`
  width: 100%;
  height: 29px;
  border-bottom: 1px solid ${theme.grey3};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-family: ${theme.font1};
  color: ${theme.black65};

  div:nth-child(2) {
    text-align: right;
  }

  ${theme.breakpoints.smallMobile} {
    min-height: 49px;
    align-items: flex-start;
    border-bottom: none;
    border-top: 1px solid ${theme.grey3};

    div:nth-child(2) {
      margin-left: 20px;
    }
  }
`;

const Wrapper = styled.div`
  width: 668px;
  height: 256px;
  margin: 204px auto;
  display: flex;

  .img-container {
    height: 100%;
    width: 256px;
  }

  .product-container {
    height: 215px;
    width: 400px;
    margin-left: 32px;
  }

  ${theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
    height: auto;
    width: 90vw;

    .product-container {
      margin-left: 0;
    }
  }

  ${theme.breakpoints.smallMobile} {
    .product-container {
      width: 100%;
      margin-left: 0;
    }
  }
`;

export default ProductDetail;
