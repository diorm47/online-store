import React from "react";
import loaderGif from "../../assets/loader.gif";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderGif} alt="Loading GIF" />
    </div>
  );
};

export default Loader;
