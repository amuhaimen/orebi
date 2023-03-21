import React from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";

export const Breadcrumb = ({ title }) => {
  return (
    <div className=" mt-28 ">
      <h1 className="mb-3 font-dm text-5xl font-bold">{title}</h1>
      <p className=" font-regular flex items-center gap-x-2 font-dm text-xs text-[#767676]">
        <Link className=" hover:font-bold hover:text-black" to="/">
          Home
        </Link>{" "}
        <TfiAngleRight />
        {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

//! # $ % & ' * + - / = ? ^ _ ` { | } ~
///^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
