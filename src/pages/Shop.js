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
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
