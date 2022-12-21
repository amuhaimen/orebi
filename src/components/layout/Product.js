import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import { BsSuitHeartFill } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Flex from "./Flex";

const Product = ({ src, badge }) => {
  return (
    <div className="px-1 shadow-lg">
      <div className=" group relative overflow-y-hidden ">
        <Image imgsrc={src} />
        {badge && <Badge title="New" />}
        <div className=" absolute left-0 bottom-[-44%] h-40 w-full bg-white bg-opacity-60 py-6 px-7 duration-500 group-hover:bottom-0 lg:max-xl:bottom-[-75%]">
          <Flex className="flex items-center justify-end  gap-x-4">
            <p className=" font-regular font-dm text-base text-[#6d6d6d] lg:max-xl:text-sm   ">
              Add to Wish List
            </p>
            <BsSuitHeartFill className="text-base" />
          </Flex>
          <Flex className=" my-5 flex items-center   justify-end gap-x-4">
            <p className=" font-regular font-dm text-base text-[#6d6d6d] lg:max-xl:text-sm   ">
              Compare
            </p>
            <TfiReload className="text-base" />
          </Flex>
          <Flex className="flex items-center justify-end    gap-x-4">
            <p className=" font-regular font-dm text-base text-[#6d6d6d] lg:max-xl:text-sm   ">
              Add to Cart
            </p>
            <RiShoppingCart2Fill className="text-base" />
          </Flex>
        </div>
      </div>
      <div className="mb-12 md:mb-0">
        <Flex className=" mt-0 flex items-center justify-between md:mt-6">
          <h3 className="font-dm text-xl font-bold lg:max-xl:text-sm">
            Basic Crew Neck Tee
          </h3>
          <p className=" font-regular font-dm text-base text-[#767676] lg:max-xl:text-sm">
            $44.00
          </p>
        </Flex>
        <p className=" font-regular mt-1 font-dm   text-base text-[#767676] md:mt-4 lg:max-xl:text-sm">
          Black
        </p>
      </div>
    </div>
  );
};

export default Product;
