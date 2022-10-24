import React from "react";
import { Carousel } from "react-carousel-minimal";
import { useDispatch } from "react-redux";
import arrow_down from "../../assets/icons/arrow_down.png";
import girl_background from "../../assets/icons/girl_background.png";
import { setAuthorized } from "../../redux/auth-reducer";
import Pagination from "./../../components/pagination/pagination";
import { carouselData, homeData } from "./../../redux/data";
import "./home-page.css";
import girl from "../../assets/images/main_girl.png";

const HomePage = () => {
  const dispatch = useDispatch();
  const ref = React.useRef(null);
  const scrollToUp = (ref) => {
    ref.current.scrollIntoView();
  };

  if (localStorage.getItem("authorized")) {
    dispatch(setAuthorized(true));
  }
  return (
    <div className="home_page">
      <header>
        <div className="home_page_wrapper">
          <div className="background_logo">
            <img src={girl_background} alt="Background logo" />
          </div>
          <div className="mobile_image">
            <img src={girl} alt="girl" />
          </div>
          <div className="carousel">
            <Carousel
              data={carouselData}
              time={3000}
              width="100%"
              height="100%"
              slideNumber={false}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconSize="40px"
              slideBackgroundColor="trasparent"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                width: "700px",
                height: "100%",
                margin: "0 auto",
              }}
            />
          </div>
          <div className="arrow_down">
            <h4>Explore our collection</h4>
            <div className="down_arrow" onClick={() => scrollToUp(ref)}>
              <img src={arrow_down} alt="down_arrow" />
            </div>
          </div>
        </div>
      </header>

      <div className="cards_block" ref={ref}>
        <div className="card_block_text">
          <div className="block_title">
            <div className="left_line"></div>
            <h2>Shop your style</h2>
            <div className="right_line"></div>
          </div>
          <div className="cards_description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              gravida cursus adipiscing viverra at tortor, egestas odio
              parturient. Morbi ut lorem in erat. Et et molestie diam diam
              ultricies. Scelerisque duis diam ac cras dictum adipiscing.
              Venenatis at sit proin ut vitae adipiscing id facilisis.
            </p>
          </div>
        </div>

        <div className="card_items">
          <Pagination itemsPerPage={16} items={homeData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
