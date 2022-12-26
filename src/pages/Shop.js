import React from "react";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";

const Shop = () => {
  return (
    <Container>
      <Breadcrumb title="Products" />
      <Flex className="flex gap-x-10">
        <div className=" w-[25%] bg-orange-500">hello</div>
        <div className="relative w-[75%]">
          <Pagination itemsPerPage={12} />
          <p className=" font-regular absolute bottom-0 right-0 font-dm text-sm text-[#767676]">
            Products from 1 to 12 of 80
          </p>
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
