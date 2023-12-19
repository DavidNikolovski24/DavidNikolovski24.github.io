import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageCarousel = ({ pictures }: { pictures: string[] | [] }) => {
  return (
    <Carousel
      showArrows={true}
      stopOnHover={true}
      autoPlay={true}
      animationHandler={"slide"}
      swipeable={true}
      infiniteLoop={true}
      showIndicators
      showThumbs={false}
      emulateTouch
    >
      {pictures?.map((el, index) => (
        <div key={index}>
          <img
            src={el}
            alt="picture"
            style={{ objectFit: "contain", maxHeight: "70vh" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
