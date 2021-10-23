import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { QueryContext } from "../util/context/QueryContext";

const Header = () => {
  const [query, setQuery] = useContext(QueryContext);

  const setQueryValue = (e) => {
    e.preventDefault();
    let inputVal = document.getElementById("inputVal").value;
    setQuery(inputVal);
  };

  useEffect(() => {
    document.getElementById("inputVal").addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        let inputVal = document.getElementById("inputVal").value;
        setQuery(inputVal);
      }
    });
  }, [setQuery]);

  return (
    <div className="Header">
      <div className="header__container">
        <Link to="/" className="logo">
          PicSearch
        </Link>
        <div className="hearder__right">
          <div className="searchBox">
            <input
              className="inputSearch"
              id="inputVal"
              type="text"
              autoComplete="off"
              placeholder="Search"
            />
            <FontAwesomeIcon
              className="SearchIcon"
              onClick={setQueryValue}
              icon={faSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
