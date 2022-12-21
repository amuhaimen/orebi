import React, { useEffect, useRef, useState } from "react";
//components============================
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import List from "./List";
import Listitem from "./Listitem";
import Search from "./Search";
import Image from "./Image";
//components end======================
import { Link } from "react-router-dom";
////icons=================================
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { RxTriangleDown } from "react-icons/rx";
import { ImCross } from "react-icons/im";
//icons end=============================

const Header = () => {
  let [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  let [userDropdownShow, setUserDropdownShow] = useState(false);
  let [cartDropdownShow, setCartDropdownShow] = useState(false);
  let categoryRef = useRef(); //=======******
  let userRef = useRef();
  let cartRef = useRef();
  //=================================eta bujte parini-1
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(document.body);
      // console.log(categoryRef.current); //*********** */
      if (categoryRef.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropdownShow(true);
      } else {
        setUserDropdownShow(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCartDropdownShow(true);
      } else {
        setCartDropdownShow(false);
      }
    });
  }, []);
  //================================eta bujte parini-1

  return (
    <>
      <div className="bg-[#F5F5F3] py-6">
        <Container>
          <Flex className="flex justify-between ">
            {/*category start======================================== */}
            <div className="flex items-center">
              <Dropdown className="relative z-40" dropref={categoryRef}>
                <p className="font-regular flex items-center gap-x-2.5 font-dm text-sm">
                  <RiBarChartHorizontalLine />
                  <span className="hidden lg:inline-block">
                    Shop by Category
                  </span>
                </p>
                {categoryDropDownShow && (
                  <List className="font-regular  absolute top-8 w-[263px]    bg-primary font-dm text-sm text-[#767676]">
                    <Listitem
                      className=" border border-solid border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-8 hover:font-bold hover:text-white "
                      itemname="Accesories"
                    />
                    <Listitem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-8 hover:font-bold hover:text-white"
                      itemname="Furniture"
                    />
                    <Listitem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-8 hover:font-bold hover:text-white"
                      itemname="Electronics"
                    />
                    <Listitem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-8 hover:font-bold hover:text-white"
                      itemname="Clothes"
                    />
                    <Listitem
                      className="border border-solid border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-8 hover:font-bold hover:text-white"
                      itemname="Bags"
                    />
                    <Listitem
                      className="  border border-solid border-[#2D2D2D] py-4 px-5 duration-300 ease-in hover:px-8 hover:font-bold hover:text-white"
                      itemname="Home appliances "
                    />
                  </List>
                )}
              </Dropdown>
            </div>
            {/* Category end==================================*/}
            {/* Search start==================================*/}

            <div className="relative w-auto lg:w-[660px]">
              <Search
                className=" placeholder:font-regular  w-full py-4 px-5 placeholder:font-dm placeholder:text-sm placeholder:text-[#C4C4C4]"
                placeholder="Search Products"
              />
              <FaSearch className="absolute top-[17px] right-[17px]" />
            </div>
            {/* Search end=========================================== */}

            <div className="flex items-center">
              <Flex className="flex gap-x-10">
                {/* User start=========================================== */}
                <Dropdown className="relative z-40" dropref={userRef}>
                  <div className="flex items-center gap-2">
                    <FaUserAlt />
                    <RxTriangleDown />
                  </div>
                  {userDropdownShow && (
                    <List className="font-regular  absolute top-8 right-0  w-[200px]   border border-solid border-[#F0F0F0] bg-white text-center font-dm text-sm text-black">
                      <Listitem
                        className=" border-b border-solid border-[#F0F0F0] py-4 px-5 duration-100 ease-in   hover:bg-primary hover:font-bold hover:text-white"
                        itemname="My Account"
                      />
                      <Listitem
                        className="border-b border-solid border-[#F0F0F0] py-4 px-5 duration-100 ease-in   hover:bg-primary hover:font-bold  hover:text-white"
                        itemname=" Log Out"
                      />
                    </List>
                  )}
                </Dropdown>
                {/* User end=========================================== */}

                {/* Cart Start=========================================== */}

                <div>
                  <Dropdown className=" relative z-40" dropref={cartRef}>
                    <HiShoppingCart className="text-xl" />
                    {cartDropdownShow && (
                      <div className=" border- [#F0F0F0] absolute top-8 right-0 w-[360px] border border-solid   text-white">
                        <div className="bg-[#F5F5F3] p-5 duration-300 ease-in">
                          <Flex className=" flex items-center justify-between   ">
                            <div>
                              <Image imgsrc="assets/cart-image.png" />
                            </div>
                            <div>
                              <h3
                                className="font-dm text-sm font-bold text-primary
                            "
                              >
                                Basic Crew Neck Tee
                              </h3>
                              <p className="mt-3 font-dm text-sm font-bold text-primary">
                                $44.00
                              </p>
                            </div>
                            <ImCross className="text-primary" />
                          </Flex>
                        </div>
                        <div className="bg-white p-5">
                          <h4 className="font-regular font-dm text-base text-[#767676]">
                            Subtotal:
                            <span className="font-bold text-primary">
                              {" "}
                              $44.00
                            </span>
                          </h4>
                          <div className="flex justify-between">
                            <Link className="mt-3 inline-block border border-solid border-primary px-10 py-4 font-dm text-base font-bold text-primary duration-300 ease-in hover:bg-primary hover:text-white">
                              View Cart
                            </Link>
                            <Link className="mt-3 inline-block border border-solid border-primary px-10 py-4 font-dm text-base font-bold text-primary duration-300 ease-in hover:bg-primary hover:text-white">
                              Checkout
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </Dropdown>
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
