import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Image from "./Image";

const Lastad = () => {
  return (
    <Container>
      <div className=" mt-0 md:mt-32">
        <Link to="#">
          <Image imgsrc="assets/lastAd.png" />
        </Link>
      </div>
    </Container>
  );
};

export default Lastad;
