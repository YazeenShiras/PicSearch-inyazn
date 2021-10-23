import React, { useContext } from "react";
import "./Filter.css";
import { QueryContext } from "../util/context/QueryContext";

const Filter = () => {
  const [query, setQuery] = useContext(QueryContext);

  const handleClick = (filter) => {
    setQuery(filter);
  };

  return (
    <div className="filter">
      <section className="filterSection">
        <div className="filterTop">
          <h5
            onClick={() => handleClick("Wallpaper")}
            className="filterButton left"
          >
            Wallpaper
          </h5>
          <h5
            onClick={() => handleClick("Vehicles")}
            className="filterButton mid"
          >
            Vehicles
          </h5>
          <h5
            onClick={() => handleClick("Nature")}
            className="filterButton right"
          >
            Nature
          </h5>
        </div>
        <div className="filterBottom">
          <h5
            onClick={() => handleClick("Portrait")}
            className="filterButton right"
          >
            Portrait
          </h5>
          <h5
            onClick={() => handleClick("Animals")}
            className="filterButton mid"
          >
            Animals
          </h5>
          <h5
            onClick={() => handleClick("Technology")}
            className="filterButton left"
          >
            Technology
          </h5>
        </div>
      </section>
    </div>
  );
};

export default Filter;
