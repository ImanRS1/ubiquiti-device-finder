import { useState, useContext } from "react";
import styled from "styled-components";
import defaultTheme from "@/themes/defaultTheme";
import { ListViewContext } from "@/context/ListViewContext";

const theme = defaultTheme();

const NavBar = () => {
  const listViewContext = useContext(ListViewContext);
  const [filterWindow, setFilterWindow] = useState(false);

  const handleClick = (active: boolean) => {
    listViewContext.setListView(active);
  };

  const filterOption = (productline: string) => {
    const FilterOptionWrapper = styled.div`
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;

      .check_box {
        display: none;
      }

      .check_box + label {
        background: url("./icons/checkbox-unmarked.svg") no-repeat;
        height: 16px;
        width: 16px;
        display: inline-block;
        padding: 0 0 0 0px;
      }

      .check_box:checked + label {
        background: url("./icons/checkbox-marked.svg") no-repeat;
        height: 16px;
        width: 16px;
        display: inline-block;
        padding: 0 0 0 0px;
      }

      label {
        margin: 0;
        font-size: 14px;
        color: ${theme.black65};
      }

      .product-text {
        margin-left: 24px;
        width: 170px;
      }
    `;

    return (
      <FilterOptionWrapper>
        <input type="checkbox" className="check_box" id={productline} />
        <label htmlFor={productline}>
          <div className="product-text">{productline}</div>
        </label>
      </FilterOptionWrapper>
    );
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
        <button
          className="filter-button"
          onClick={() => setFilterWindow(!filterWindow)}
        >
          Filter
        </button>
        {filterWindow ? (
          <FilterContainer>
            <FilterHeader>
              <p className="filter-text">Filter</p>
              <button onClick={() => setFilterWindow(!filterWindow)}>
                <img src="./icons/close-icon.svg" alt="A search icon" />
              </button>
            </FilterHeader>
            <FilterTitle>Product line</FilterTitle>
            <FilterOptionsContainer>
              {filterOption("UniFi")}
              {filterOption("UniFi LTE")}
              {filterOption("UniFi Protect")}
              {filterOption("UniFi Access")}
              {filterOption("airMax")}
              {filterOption("EdgeMax")}
            </FilterOptionsContainer>
          </FilterContainer>
        ) : (
          ""
        )}
      </Options>
    </Wrapper>
  );
};

const FilterOptionsContainer = styled.div`
  width: 208px;
  min-height: 192px;
`;

const FilterTitle = styled.div`
  width: 208px;
  height: 64px;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${theme.black85};
  font-size: 14px;
`;

const FilterHeader = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.grey6};

  .filter-text {
    font-family: ${theme.font1};
    color: ${theme.black65};
    margin: 0;
    margin-left: 24px;
    display: flex;
    align-items: center;
  }

  button {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 24px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  min-height: 336px;
  padding-bottom: 10px;
  box-shadow: 0px 12px 48px rgba(0, 0, 0, 0.15);
  position: absolute;
  background-color: #ffffff;
  top: 0;
  right: 0;
`;

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

  button {
    cursor: pointer;
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
  position: relative;
`;

export default NavBar;
