import React, { useState } from "react";
import { Breadcrumb } from "../components/layout/Breadcrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";

const Shop = () => {
  let [showNumber, setShowNumber] = useState(12);
  let handlePaginationChange = (e) => {
    setShowNumber(e.target.value);
  };
  return (
    <Container>
      <Breadcrumb title="Products" />
      <Flex className="flex gap-x-10">
        <div className=" w-[25%] bg-orange-500">hello</div>
        <div className="relative w-[75%]">
          <div className="mb-10 flex justify-end gap-x-10">
            <div className="items-center gap-x-9 md:flex">
              <span className=" font-regular inline-block font-dm text-base text-[#767676]">
                Sort By:
              </span>
              <select
                id="countries"
                class=" font-regular font-regular focus:border-black-500   block cursor-pointer rounded-lg border border-[#F0F0F0] p-2.5 font-dm text-base text-[#767676] md:w-[239px] "
              >
                <option selected className="font-regular font-dm text-base">
                  Featured
                </option>
                <option value="US" className="font-regular font-dm text-base">
                  United States
                </option>
                <option value="CA" className="font-regular font-dm text-base">
                  Canada
                </option>
                <option value="FR" className="font-regular font-dm text-base">
                  France
                </option>
                <option value="DE" className="font-regular font-dm text-base">
                  Germany
                </option>
              </select>
            </div>
            <div className="items-center gap-x-9 md:flex">
              <div className="font-regular font-dm text-base text-[#767676]">
                Show:
              </div>
              <select
                onChange={handlePaginationChange}
                id="countries"
                class=" font-regular font-regular focus:border-black-500   block cursor-pointer rounded-lg border border-[#F0F0F0] p-2.5 font-dm text-base text-[#767676] md:w-[139px] "
              >
                <option value="12" className="font-regular font-dm text-base">
                  12
                </option>
                <option value="24" className="font-regular font-dm text-base">
                  24
                </option>
                <option value="48" className="font-regular font-dm text-base">
                  48
                </option>
              </select>
            </div>
          </div>

          <Pagination itemsPerPage={showNumber} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
