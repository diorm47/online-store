import PagesBase from "../../components/pages-base/pages_base";
import { homeData } from "./../../redux/data";

const Clothes = () => {
  return <PagesBase page_title={"CLOTHES"} carts_data={homeData} />;
};

export default Clothes;
