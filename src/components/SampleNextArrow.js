import React from "react";
import { GoTriangleRight } from "react-icons/go";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[38%] right-0 !flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)] sm:right-[25px] sm:h-16  sm:w-16"
      style={{
        ...style,

        // height: "64px",
        // width: "64px",
        // borderRadius: "50%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // position: "absolute",
        // top: "38%",
        // right: "25px",
        // border: "solid 1px black",
      }}
      onClick={onClick}
    >
      <GoTriangleRight className=" text-2xl text-white" />
    </div>
  );
};

export default SampleNextArrow;
