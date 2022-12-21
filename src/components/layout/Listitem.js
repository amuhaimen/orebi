import React, { Children } from "react";
import { Link } from "react-router-dom";

const Listitem = ({ itemname, className, href }) => {
  return (
    <li className={className}>
      <Link to={href}>{itemname}</Link>
    </li>
  );
  //props and children kivabe kaj kore
};

export default Listitem;
