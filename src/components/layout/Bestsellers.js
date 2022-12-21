import React from "react";
import Container from "./Container";
import Headinng from "./Headinng";
import Flex from "./Flex";
import Product2 from "./Product2";

const Bestsellers = () => {
  return (
    <div className=" mt:m-5 md:mt-32">
      <Container>
        <Headinng title="Our Bestsellers" />
        <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10">
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px] ">
            <Product2 src="assets/p1.png" badge={true} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px] ">
            <Product2 src="assets/p3.png" badge={false} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px] ">
            <Product2 src="assets/p4.png" badge={true} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px] ">
            <Product2 src="assets/p2.png" badge={false} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Bestsellers;
