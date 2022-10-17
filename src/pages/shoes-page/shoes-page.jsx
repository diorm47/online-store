import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/pagination/pagination";
import { filteredItem } from "../../redux/search-reducer";
import { shoesData } from "./../../redux/data";
import "./shoes-page.css";

const Shoes = () => {
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
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.search.filtered);

  const filterCategory = (key) => {
    const data = shoesData.filter((el) => el.type === key);
    dispatch(filteredItem(data));
  };
  console.log(filteredItems);

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
                <h2>CATEGORY</h2>
                <div className="black_line"></div>
                <div className="categories_list">
                  {categories.map((category) => (
                    <p
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
              <h2>SIZE</h2>
              <div className="black_line"></div>
              <div className="sizes_block">
                <div className="size_button">35.5/5</div>
                <div className="size_button">36/5.5</div>
                <div className="size_button">37.5/6.5</div>
                <div className="size_button">38/7</div>
                <div className="size_button">39/7.5</div>
                <div className="size_button">39.5/8</div>
                <div className="size_button">40/7.5</div>
                <div className="size_button">41/9.5</div>
                <div className="size_button">41.5/10</div>
                <div className="size_button">42/10.5</div>
                <div className="size_button">42/11</div>
                <div className="size_button">43/12</div>
              </div>
            </div>

            <div className="colors">
              <h2>COLOR</h2>
              <div className="black_line"></div>
              <div className="colors_block">
                <div className="color_button">
                  <div className="belge"></div>
                  <p className="descri">Belge</p>
                </div>
                <div className="color_button">
                  <div className="blue"></div>
                  <p className="descri">Blue</p>
                </div>
                <div className="color_button">
                  <div className="black"></div>
                  <p className="descri">Black</p>
                </div>
                <div className="color_button">
                  <div className="orange"></div>
                  <p className="descri">Orange</p>
                </div>
                <div className="color_button">
                  <div className="green"></div>
                  <p className="descri">Green</p>
                </div>
                <div className="color_button">
                  <div className="brown"></div>
                  <p className="descri">Brown</p>
                </div>
                <div className="color_button">
                  <div className="purple"></div>
                  <p className="descri">Purple</p>
                </div>
                <div className="color_button">
                  <div className="gold"></div>
                  <p className="descri">Gold</p>
                </div>
                <div className="color_button">
                  <div className="taupe"></div>
                  <p className="descri">Taupe</p>
                </div>
                <div className="color_button">
                  <div className="white"></div>
                  <p className="descri">White</p>
                </div>
                <div className="color_button">
                  <div className="pink"></div>
                  <p className="descri">Pink</p>
                </div>
                <div className="color_button">
                  <div className="red"></div>
                  <p className="descri">Red</p>
                </div>
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
                <input type="button" value="Apply" className="apply_button" />
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
              <Pagination itemsPerPage={12} items={shoesData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes;
