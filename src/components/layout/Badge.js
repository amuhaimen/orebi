import React from "react";

const Badge = ({ title }) => {
  return (
    <span className=" absolute top-5 left-5 inline-block bg-primary py-2 px-7 font-dm text-sm font-bold text-white">
      {title}
    </span>
  );
};

export default Badge;
