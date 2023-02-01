import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <img src="./logos/ubiquiti-logo.svg" alt="Ubiquiti logo" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 56px;
  height: 56px;
  background: radial-gradient(100% 100% at 50% 0%, #006fff 0%, #003c9e 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: radial-gradient(100% 100% at 50% 0%, #005ed9 0%, #003386 100%),
      radial-gradient(100% 100% at 50% 0%, #006fff 0%, #003c9e 100%);
  }
`;

export default Logo;
