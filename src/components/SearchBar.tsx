import React from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";

const theme = defaultTheme();

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchField>
        <form className="search">
          <button type="submit">
            <img src="./icons/search-icon.svg" alt="A search icon" />
          </button>
          <input type="text" placeholder="Search" />
          <button>
            <img src="./icons/close-icon.svg" alt="A search icon" />
          </button>
        </form>
      </SearchField>
    </Wrapper>
  );
};

const SearchField = styled.div`
  width: 344px;
  height: 32px;
  background-color: ${theme.grey1};
  border-radius: 4px;
  margin-left: 30px;
  padding: 6px 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font1};

  form {
    display: flex;
    align-items: center;
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
  }

  input[type="text"] {
    flex-grow: 1;
    color: ${theme.black85};
    font-size: 24;

    &:focus {
      outline: none;
    }

    ::placeholder {
      color: ${theme.grey2};
    }
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 48px;
  border-bottom: solid ${theme.grey3} 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default SearchBar;
