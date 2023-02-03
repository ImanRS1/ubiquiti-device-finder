import Layout from "@/components/Layout";
import ProductNavbar from "@/components/ProductNavbar";
import { useRouter } from "next/router";
import defaultTheme from "@/themes/defaultTheme";
import styled from "styled-components";

const theme = defaultTheme();

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <Layout>
      <ProductNavbar product="Access Point WiFi 6 In-wall" />
      <Wrapper>
        <div className="img-container">
          <img
            src={`https://static.ui.com/fingerprint/ui/icons/${productId}_257x257.png`}
            alt={"productName"}
          />
        </div>
        <div className="product-container">
          <DataRow>
            <div>Product line</div>
            <div>Unifi</div>
          </DataRow>
          <DataRow>
            <div>ID</div>
            <div>unifi-network</div>
          </DataRow>
          <DataRow>
            <div>Name</div>
            <div>Access Point WiFi 6 In-Wall</div>
          </DataRow>
          <DataRow>
            <div>Short name</div>
            <div>U6-Enterprise</div>
          </DataRow>
          <DataRow>
            <div>Max. power</div>
            <div>25 W</div>
          </DataRow>
          <DataRow>
            <div>Speed</div>
            <div>2400 Mbps</div>
          </DataRow>
          <DataRow>
            <div>Number of ports</div>
            <div>5</div>
          </DataRow>
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
    margin-bottom: 41px;
  }
`;

export default ProductDetail;
