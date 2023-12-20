import Image from "next/image";
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
      interval={5000}
    >
      {pictures?.map((el, index) => (
        <div key={index}>
          <Image
            src={el}
            width={100}
            height={200}
            sizes="70vh 100vw"
            alt="picture"
            style={{ objectFit: "contain", maxHeight: "80vh" }}
            priority={false}
            quality={100}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
