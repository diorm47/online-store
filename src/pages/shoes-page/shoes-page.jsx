import React from "react";
import PagesBase from "./../../components/pages-base/pages_base";
import { shoesData } from "./../../redux/data";

const Shoes = () => {
  return <PagesBase page_title={"SHOES"} carts_data={shoesData} />;
};

export default Shoes;
