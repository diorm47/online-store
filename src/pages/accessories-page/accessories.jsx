import React from "react";
import { accessoriesData } from "../../redux/data";
import PagesBase from "./../../components/pages-base/pages_base";

const Accessories = () => {
  return <PagesBase page_title={"ACCESSORIES"} carts_data={accessoriesData} />;
};

export default Accessories;
