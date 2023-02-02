import { useState, useContext } from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";
import { ListViewContext } from "@/context/ListViewContext";

const theme = defaultTheme();

const NavBar = () => {
  const listViewContext = useContext(ListViewContext);

  const handleClick = (active: boolean) => {
    listViewContext.setListView(active);
  };

  return (
    <Wrapper>
      <SearchField>
        <form className="search">
          <button type="submit" className="search-button">
            <img src="./icons/search-icon.svg" alt="A search icon" />
          </button>
          <input type="text" placeholder="Search" />
          <button>
            <img src="./icons/close-icon.svg" alt="A search icon" />
          </button>
        </form>
      </SearchField>
      <Options>
        <button onClick={() => handleClick(true)}>
          {listViewContext.listView ? (
            <img src="./icons/list-active-icon.svg" alt="List display symbol" />
          ) : (
            <img
              src="./icons/list-notactive-icon.svg"
              alt="List display symbol"
            />
          )}
        </button>
        <button onClick={() => handleClick(false)}>
          {listViewContext.listView ? (
            <img
              src="./icons/grid-notactive-icon.svg"
              alt="Grid display symbol"
            />
          ) : (
            <img src="./icons/grid-active-icon.svg" alt="Grid display symbol" />
          )}
        </button>
        <button className="filter-button">Filter</button>
      </Options>
    </Wrapper>
  );
};

const Options = styled.div`
  width: 105px;
  height: 32px;
  margin-right: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .filter-button {
    color: ${theme.black45};
  }
`;

const SearchField = styled.div`
  width: 344px;
  height: 32px;
  background-color: ${theme.grey1};
  border-radius: 4px;
  margin-left: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;

  .search-button {
    padding-right: 2px;
  }
  form {
    display: flex;
    align-items: center;
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    padding: 6px 8px;
    &:hover {
      background-color: ${theme.grey3};
      cursor: pointer;
    }
  }

  input[type="text"] {
    flex-grow: 1;
    color: ${theme.black85};
    font-size: 24;
    caret-color: ${theme.blue1};

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
  font-family: ${theme.font1};
`;

export default NavBar;
