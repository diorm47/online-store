import { homeData } from "./../../redux/data";
import Pagination from "../../components/pagination/pagination";
import "./clothes-page.css";

const Clothes = () => {
  return (
    <div className="base">
      <div className="base_wrapper">
        <div className="base_title">
          <h1>CLOTHES</h1>
        </div>
        <div className="base_content">
          <div className="filter_part">
            <div className="category">
              <div className="categories">
                <h2>CATEGORY</h2>
                <div className="black_line"></div>
                <div className="categories_list">
                  <a href="#">All</a>
                  <a href="#">Dresses</a>
                  <a href="#">Denim</a>
                  <a href="#">Jeans</a>
                  <a href="#">Jumpsuits</a>
                  <a href="#">Tops</a>
                  <a href="#">Jackets and coats</a>
                  <a href="#">Pants</a>
                  <a href="#">Shorts</a>
                  <a href="#">Skirts</a>
                  <a href="#">Loungerie & underwear</a>
                  <a href="#">Leather</a>
                  <a href="#">Sweaters & knits</a>
                </div>
              </div>
            </div>

            <div className="size">
              <h2>SIZE</h2>
              <div className="black_line"></div>
              <div className="sizes_block">
                <div className="size_button">XXS</div>
                <div className="size_button">XS</div>
                <div className="size_button">S</div>
                <div className="size_button">M</div>
                <div className="size_button">L</div>
                <div className="size_button">XL</div>
                <div className="size_button">23</div>
                <div className="size_button">24</div>
                <div className="size_button">25</div>
                <div className="size_button">26</div>
                <div className="size_button">27</div>
                <div className="size_button">28</div>
                <div className="size_button">29</div>
                <div className="size_button">30</div>
                <div className="size_button">31</div>
                <div className="size_button">32</div>
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
                <input type="number" placeholder="₦" />
                <p> to </p>
                <input type="number" placeholder="₦" />
                <div className="apply_button">
                  <input type="button" value="Apply" />
                </div>
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
              <Pagination itemsPerPage={12} items={homeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
