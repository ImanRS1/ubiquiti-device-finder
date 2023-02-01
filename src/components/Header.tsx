import React from "react";
import styled, { useTheme } from "styled-components";
import Logo from "./Logo";
import defaultTheme from "@/themes/defaultTheme";

const theme = defaultTheme();

const Header = () => {
  console.log(theme);

  return (
    <Wrapper>
      <LeftContainer>
        <Logo />
        <p>Devices</p>
      </LeftContainer>
      <RightContainer>
        <p>Author/Iman Reza Soltani</p>
      </RightContainer>
    </Wrapper>
  );
};

const LeftContainer = styled.div`
  display: flex;
`;

const RightContainer = styled.div``;

const Wrapper = styled.div`
  width: 100vw;
  height: 56px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.grey1};
  font-family: ${theme.font1};
  color: ${theme.grey2};
`;

export default Header;
