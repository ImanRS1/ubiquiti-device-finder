import Layout from "@/components/Layout";
import ProductNavbar from "@/components/ProductNavbar";
import { useRouter } from "next/router";
import defaultTheme from "@/themes/defaultTheme";
import styled from "styled-components";
import { GlobalState } from "@/context/GlobalState";
import { useContext } from "react";

const theme = defaultTheme();

function ProductDetail() {
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
          <img
            src={`https://static.ui.com/fingerprint/ui/icons/${productId}_257x257.png`}
            alt={"productName"}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://static.ui.com/fingerprint/ui/icons/98702c27-c680-4d23-bd75-155c7f07b013_257x257.png";
            }}
          />
        </div>
        <div className="product-container">
          <DataRow>
            <div>Product line</div>
            <div>{device?.line.name}</div>
          </DataRow>
          <DataRow>
            <div>ID</div>
            <div>{device?.line.id}</div>
          </DataRow>
          <DataRow>
            <div>Name</div>
            <div>{device?.product?.name}</div>
          </DataRow>

          {device?.shortnames?.[0] ? (
            <DataRow>
              <div>Short names</div>
              <div>{device.shortnames.map((shortname) => `${shortname} `)}</div>
            </DataRow>
          ) : (
            ""
          )}

          {device?.unifi ? (
            <>
              {device.unifi.network?.radios?.na?.maxPower ? (
                <DataRow>
                  <div>Max. power</div>
                  <div>{device.unifi.network.radios.na.maxPower} W</div>
                </DataRow>
              ) : (
                ""
              )}

              {device.unifi.network?.ethernetMaxSpeedMegabitsPerSecond ? (
                <DataRow>
                  <div>Speed</div>
                  <div>
                    {device.unifi.network.ethernetMaxSpeedMegabitsPerSecond}{" "}
                    Mbps
                  </div>
                </DataRow>
              ) : (
                ""
              )}

              {device.unifi.network?.ports?.standard ||
              device.unifi.network?.numberOfPorts ? (
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
              {device.unifi.network?.minimumFirmwareRequired ? (
                <DataRow>
                  <div>Minimum firmware</div>
                  <div>{device.unifi.network.minimumFirmwareRequired}</div>
                </DataRow>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
          {device?.uisp?.firmware?.platform ? (
            <DataRow>
              <div>Platform</div>
              <div>{device.uisp.firmware.platform}</div>
            </DataRow>
          ) : (
            ""
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
`;

export default ProductDetail;
