import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import defaultTheme from "@/themes/defaultTheme";

const theme = defaultTheme();

const Header = () => {
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
  align-items: center;
  p {
    margin-left: 16px;
    font-size: 20px;
    letter-spacing: -0.5px;
    color: ${theme.grey2};
  }
`;

const RightContainer = styled.div`
  p {
    margin-right: 28px;
    font-size: 14px;
    color: ${theme.black65};
  }
`;

const Wrapper = styled.header`
  width: 100vw;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.grey1};
  font-family: ${theme.font1};
  border-bottom: solid ${theme.grey3} 1px;
`;

export default Header;
