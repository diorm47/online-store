import React from "react";
import { useSelector } from "react-redux";
import Cards from "../cards/cards";
import "./search.css";

function Search() {
  const serchingItem = useSelector((state) => state.search.searched);
  const searchings = useSelector((state) => state.search.searchings);

  // const keys = ["description", "price"];

  // const search = (searchings) => {
  //   return searchings
  //     .flat()
  //     .filter((searchings) =>
  //       keys.some((key) => searchings[key].toLowerCase().includes(serchingItem))
  //     );
  // };

  const search = (searchings) => {
    return searchings
      .flat()
      .filter((searchings) =>
        searchings.description
          .toLowerCase()
          .includes(serchingItem.toLowerCase())
      );
  };

  return (
    <div className="search_wrapper">
      {<Cards carts_data={search(searchings)} /> || (
        <div className="item_not_found">
          <span>{serchingItem}</span> <p>not found(</p>
        </div>
      )}
    </div>
  );
}

export default Search;
