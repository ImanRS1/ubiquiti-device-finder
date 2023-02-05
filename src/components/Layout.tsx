import styled from "styled-components";

import Header from "@/components/Header";

type Layout = {
  children: React.ReactNode;
};

const Layout = ({ children }: Layout) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
