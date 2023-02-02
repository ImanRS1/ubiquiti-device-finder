import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProductsList from "@/components/ProductsList";
import ProductsGrid from "@/components/ProductsGrid";
import styled from "styled-components";
import { ListViewContext } from "@/context/ListViewContext";
import { useContext } from "react";

export default function Home() {
  const listViewContext = useContext(ListViewContext);
  return (
    <Wrapper>
      <Header />
      <NavBar />

      {listViewContext.listView ? <ProductsList /> : <ProductsGrid />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
