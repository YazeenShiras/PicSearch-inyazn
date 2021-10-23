import React from "react";
import "./Body.css";
import Filter from "./Filter";
import Footer from "./Footer";
import ImageGrid from "./ImageGrid";

const Body = () => {
  return (
    <div className="mainBody">
      <Filter />
      <ImageGrid />
      <Footer />
    </div>
  );
};

export default Body;
