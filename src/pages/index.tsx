import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProductsList from "@/components/ProductsList";
import ProductsGrid from "@/components/ProductsGrid";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <NavBar />
      <ProductsGrid />
      {/* <ProductsList /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
