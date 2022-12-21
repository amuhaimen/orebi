import React, { Component } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Headinng from "./Headinng";
import Product from "./Product";
import SampleNextArrow from "../SampleNextArrow";
import SamplePrevArrow from "../SamplePrevArrow";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Newarraivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className=" mt-5 md:mt-32">
      <Container>
        <Headinng title="New Arrivals" />
        {/* <Flex className="flex gap-x-10"> */}
        <Slider {...settings}>
          <div className="max-w-[370px] ">
            <Product src="assets/p1.png" badge={false} />
          </div>
          <div className="max-w-[370px] ">
            <Product src="assets/p2.png" badge={true} />
          </div>
          <div className="max-w-[370px] ">
            <Product src="assets/p3.png" badge={false} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assets/p4.png" badge={true} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assets/p4.png" badge={true} />
          </div>
        </Slider>

        {/* </Flex> */}
      </Container>
    </div>
  );
};

export default Newarraivals;
