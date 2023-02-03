import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import ProductsList from "@/components/ProductsList";
import ProductsGrid from "@/components/ProductsGrid";
import styled from "styled-components";
import { GlobalState } from "@/context/GlobalState";
import { useContext } from "react";

export default function Home() {
  const globalState = useContext(GlobalState);
  return (
    <Wrapper>
      <Header />
      <Navbar />
      {globalState.listView ? <ProductsList /> : <ProductsGrid />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;
