import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiNumber2 } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { RxReload } from "react-icons/rx";

const Additionalinfo = () => {
  return (
    <div className="mt-[-6px] border border-solid border-[#FOFOFO] bg-white py-2 sm:py-5 ">
      <Container>
        <Flex className="flex justify-between">
          <Flex className="flex items-center gap-x-[5px] sm:gap-x-4">
            <RiNumber2 className="text-[10px] sm:text-2xl" />
            <p className=" font-regular font-dm text-[10px] text-[#6d6d6d] sm:text-base">
              Two years warranty
            </p>
          </Flex>
          <Flex className="flex items-center gap-x-[5px] sm:gap-x-4">
            <TbTruckDelivery className="text-[10px] sm:text-2xl" />
            <p className="font-regular font-dm text-[10px] text-[#6d6d6d]  sm:text-base">
              Free shipping
            </p>
          </Flex>
          <Flex className="flex items-center gap-x-[5px] sm:gap-x-4">
            <RxReload className="text-[10px] sm:text-2xl" />
            <p className="font-regular font-dm text-[10px] text-[#6d6d6d] sm:text-base">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Additionalinfo;
