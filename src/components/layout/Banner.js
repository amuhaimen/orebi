import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./Image";

const Banner = () => {
  let [dotActive, setDotActive] = useState(0);
  const settings = {
    ///eta buji nay-1====================================
    beforeChange: (prev, next) => {
      setDotActive(next, prev);
    },
    //eta buji nay-1==================================
    dots: true,
    arrows: false,
    slidesToShow: 1, //koyta show korbe
    slidesToScroll: 1, //ekbare koyta slide hobe
    autoplay: true,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    //eta buji nay-2=======================================
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px  #262626 solid",
                padding: "10px 0 ",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px  white solid",
                padding: "10px 0 ",
              }
        }
        //eta buji nay-2=======================================
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY( -50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),

          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "20px",
                      color: "#262626",
                      borderRight: "3px  #262626 solid",
                      fontSize: "10px",
                    }
                  : {
                      width: "20px",
                      color: "transparent",
                      borderRight: "3px  white solid",
                      fontSize: "10px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  //eta buji nay=======================================
  return (
    <Slider {...settings}>
      <Link to="#">
        <div>
          <Image imgsrc="assets/Banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Image imgsrc="assets/Banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Image imgsrc="assets/Banner.png" />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
