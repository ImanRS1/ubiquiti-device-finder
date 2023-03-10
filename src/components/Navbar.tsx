import { useContext } from "react";

import styled from "styled-components";

import { GlobalState } from "@/context/GlobalState";
import defaultTheme from "@/themes/defaultTheme";

import FilterWindow from "./FilterWindow";

const theme = defaultTheme();

const Navbar = () => {
  const globalState = useContext(GlobalState);

  const handleClick = (active: boolean) => {
    globalState.setListView(active);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      globalState.setSearchValue(
        (event as unknown as React.ChangeEvent<HTMLInputElement>).target.value
      );
      (event as unknown as React.ChangeEvent<HTMLInputElement>).target.value =
        "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    globalState.setSearchValue(e.target.value);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    globalState.setSearchValue("");
  };

  return (
    <Wrapper>
      <SearchField>
        <div className="form">
          <div className="search-button">
            <img src="./icons/search-icon.svg" alt="A search icon" />
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="search-field"
            value={globalState.searchValue}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleReset}>
            <img src="./icons/close-icon.svg" alt="A reset icon" />
          </button>
        </div>
      </SearchField>
      <Options>
        <button onClick={() => handleClick(true)}>
          {globalState.listView ? (
            <img src="./icons/list-active-icon.svg" alt="List display symbol" />
          ) : (
            <img
              src="./icons/list-notactive-icon.svg"
              alt="List display symbol"
            />
          )}
        </button>
        <button onClick={() => handleClick(false)}>
          {globalState.listView ? (
            <img
              src="./icons/grid-notactive-icon.svg"
              alt="Grid display symbol"
            />
          ) : (
            <img src="./icons/grid-active-icon.svg" alt="Grid display symbol" />
          )}
        </button>
        <button
          className="filter-button"
          onClick={() => globalState.setFilterWindow(!globalState.filterWindow)}
        >
          Filter
        </button>
        <FilterWindow />
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
  flex-shrink: 0;

  .filter-button {
    color: ${theme.black45};
    font-size: 14px;
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  ${theme.breakpoints.tablet} {
    margin-right: 10px;
  }

  ${theme.breakpoints.mobile} {
    margin-right: 7px;
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
    padding-left: 8px;
    display: flex;
    align-items: center;
  }
  .form {
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
    font-size: 14px;
    caret-color: ${theme.blue1};

    &:focus {
      outline: none;
    }

    ::placeholder {
      color: ${theme.grey2};
    }
  }

  ${theme.breakpoints.tablet} {
    margin-left: 15px;
  }

  ${theme.breakpoints.mobile} {
    margin-left: 10px;
  }

  ${theme.breakpoints.smallMobile} {
    margin-right: 30px;

    input[type="text"] {
      width: 50px;
    }

    button {
      display: flex;
      align-items: center;
      padding: 6px 6px;
    }
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 48px;
  border-bottom: solid ${theme.grey3} 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${theme.font1};
  position: relative;
`;

export default Navbar;
