import React from "react";
import up_arrow from "../../assets/icons/up_arrow.png";

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="to_start_button" onClick={scrollToTop}>
      <img src={up_arrow} alt="Up Arrow button" />
    </div>
  );
};

export default ScrollButton;
