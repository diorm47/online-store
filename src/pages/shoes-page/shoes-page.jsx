import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/pagination/pagination";
import { filteredItem } from "../../redux/search-reducer";
import { shoesData } from "./../../redux/data";
import "./shoes-page.css";
import "../../components/utils/colors.css";
import Cards from "../../components/cards/cards";

import { ReactComponent as ClearIcon } from "../../assets/icons/clear_icon.svg";

const Shoes = () => {
  const filteredItems = useSelector((state) => state.search.filtered);
  const dispatch = useDispatch();

  const categories = [
    {
      key: "all",
    },
    {
      key: "booties",
    },
    {
      key: "flats",
    },
    {
      key: "boots",
    },
    {
      key: "sandals",
    },
    {
      key: "sneakers",
    },
    {
      key: "slides",
    },
    {
      key: "heels",
    },
    {
      key: "wedges",
    },
    {
      key: "mules",
    },
    {
      key: "party",
    },
    {
      key: "vegan",
    },
    {
      key: "oxfords",
    },
  ];
  const sizeCategories = [
    {
      key: "35.5/5",
    },
    {
      key: "36/5.5",
    },
    {
      key: "37.5/6.5",
    },
    {
      key: "38/7",
    },
    {
      key: "39/7.5",
    },
    {
      key: "39.5/8",
    },
    {
      key: "40/7.5",
    },
    {
      key: "41/9.5",
    },
    {
      key: "41.5/10",
    },
    {
      key: "42/10.5",
    },
    {
      key: "42/11",
    },
    {
      key: "43/12",
    },
  ];
  const colorCategories = [
    {
      key: "belge",
    },
    {
      key: "blue",
    },
    {
      key: "black",
    },
    {
      key: "orange",
    },
    {
      key: "green",
    },
    {
      key: "brown",
    },
    {
      key: "purple",
    },
    {
      key: "gold",
    },
    {
      key: "taupe",
    },
    {
      key: "white",
    },
    {
      key: "pink",
    },
    {
      key: "red",
    },
  ];

  const [active, setActive] = useState("all");
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [visibCategList, setVisibilityList] = useState(false);

  const toggleCatList = () => {
    setVisibilityList(true);

    if (visibCategList) {
      setVisibilityList(false);
    }
  };

  const filterCategory = (key) => {
    const data = shoesData.filter((el) => el.type === key);
    dispatch(filteredItem(data));
    setActive(key);
    if (key === "all") {
      dispatch(filteredItem({}));
    }
  };
  const clearFilters = () => {
    setActive("all");
    dispatch(filteredItem({}));
  };

  const filterSize = (key) => {
    const data = shoesData.filter((el) => el.size === key);
    dispatch(filteredItem(data));
    setActiveSize(key);
  };
  const clearSizeFilters = () => {
    setActiveSize("");
    dispatch(filteredItem({}));
  };

  const filterColor = (key) => {
    const data = shoesData.filter((el) => el.color === key);
    dispatch(filteredItem(data));
    setActiveColor(key);
  };

  return (
    <div className="base">
      <div className="base_wrapper">
        <div className="base_title">
          <h1>SHOES</h1>
        </div>
        <div className="base_content">
          <div className="filter_part">
            <div className="category">
              <div className="categories">
                <div className="cat_title" onClick={toggleCatList}>
                  <h2>CATEGORY</h2>
                  <div
                    onClick={() => clearFilters()}
                    className={
                      active !== "all" ? "clear_filter" : "clear_filter_hided"
                    }
                  >
                    <p>CLEAR</p>
                    <ClearIcon />
                  </div>
                </div>

                <div className="black_line"></div>
                <div
                  className={visibCategList ? "categories_list" : " hided_list"}
                >
                  {categories.map((category) => (
                    <p
                      className={active === category.key ? "active" : ""}
                      onClick={() => filterCategory(category.key)}
                      key={category.key}
                    >
                      {category.key}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="size">
              <div className="size_title">
                <h2>
                  SIZE - <span>EU/US</span>{" "}
                </h2>
                <div
                  onClick={() => clearSizeFilters()}
                  className={
                    activeSize !== "" ? "clear_filter" : "clear_filter_hided"
                  }
                >
                  <p>CLEAR</p>
                  <ClearIcon />
                </div>
              </div>

              <div className="black_line"></div>
              <div className="sizes_block">
                {sizeCategories.map((size) => (
                  <div
                    onClick={() => filterSize(size.key)}
                    className={
                      activeSize === size.key
                        ? "size_button_shoes activeSize"
                        : "size_button_shoes"
                    }
                    key={size.key}
                  >
                    <p>{size.key}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="colors">
              <div className="colors_title">
                <h2>COLOR</h2>
                <div
                  onClick={() => clearSizeFilters()}
                  className={
                    activeColor !== "" ? "clear_filter" : "clear_filter_hided"
                  }
                >
                  <p>CLEAR</p>
                  <ClearIcon />
                </div>
              </div>

              <div className="black_line"></div>
              <div className="colors_block">
                {colorCategories.map((color) => (
                  <div
                    className="color_button"
                    key={color.key}
                    onClick={() => filterColor(color.key)}
                  >
                    <div className={color.key}></div>
                    <p className="descri">{color.key}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="price">
              <h2>PRICE</h2>
              <div className="black_line"></div>
              <div className="prices_filter">
                <div className="ten">
                  <input type="checkbox" name="ten" id="ten" />
                  <p>₦0 - ₦10,000</p>
                </div>
                <div className="twenty">
                  <input type="checkbox" name="twenty" id="twenty" />
                  <p>₦10,000 - ₦20,000</p>
                </div>
                <div className="fifty">
                  <input type="checkbox" name="fifty" id="fifty" />
                  <p>₦20,000 - ₦50,000</p>
                </div>
                <div className="hundred">
                  <input type="checkbox" name="hundred" id="hundred" />
                  <p>₦50,000 - ₦100,000</p>
                </div>
                <div className="two_hundred">
                  <input type="checkbox" name="two_hundred" id="two_hundred" />
                  <p>₦100,000 - ₦200,000</p>
                </div>
              </div>
              <div className="price_filterer">
                <input type="text" placeholder="₦" />
                <p> to </p>
                <input type="text" placeholder="₦" />
                <div className="apply_button">
                  <input type="button" value="Apply" />
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="products_part">
            <div className="sort_select">
              <select name="sorting_products" id="sorting_products">
                <option value="popular">Most popular</option>
                <option value="selling">Best Selling</option>
                <option value="high_low">Price: High to Low</option>
                <option value="low_high">Price: Low to High</option>
              </select>
            </div>
            <div className="black_line"></div>

            <div className="product_content">
              {filteredItems.length >= 1 ? (
                <div className="items">
                  <Cards carts_data={filteredItems} />
                </div>
              ) : (
                <Pagination itemsPerPage={12} items={shoesData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes;
