import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import Listitem from "./Listitem";
import { VscThreeBars } from "react-icons/vsc";
import { useEffect, useState } from "react";
import Container from "./Container";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        console.log(window.innerWidth);
        setShow(false);
      } else {
        setShow(true);
      }
    }
    //ekhane function ta keno call hoise buji nay
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <nav className="py-8">
      <Container>
        <Flex className="lg:flex">
          <div className="lg: w-1/4	">
            <Image imgsrc={"assets/logo.png"} />
          </div>
          <div className="w-full  lg:w-3/4">
            <VscThreeBars
              onClick={() => setShow(!show)}
              className="absolute top-2.5  right-2.5 ml-auto block lg:hidden"
            />
            {show && (
              <List className=" mt-5  lg:mt-0 lg:flex lg:justify-end lg:gap-x-10">
                <Listitem
                  className="font-regular my-2.5 font-dm text-sm transition duration-700 ease-in-out hover:border-b-2 hover:border-solid hover:border-black hover:font-bold lg:my-0 "
                  itemname="Home"
                />
                <Listitem
                  className="font-regular my-2.5 font-dm text-sm   transition duration-700 ease-in-out hover:border-b-2 hover:border-solid hover:border-black hover:font-bold lg:my-0"
                  itemname="Shop"
                />
                <Listitem
                  className="font-regular my-2.5 font-dm text-sm transition duration-700 ease-in-out hover:border-b-2 hover:border-solid hover:border-black hover:font-bold lg:my-0"
                  itemname="About"
                />
                <Listitem
                  className="font-regular my-2.5 font-dm text-sm transition duration-700 ease-in-out hover:border-b-2 hover:border-solid hover:border-black hover:font-bold lg:my-0"
                  itemname="Contacts"
                />
                <Listitem
                  className="font-regular my-2.5 font-dm text-sm transition duration-700 ease-in-out hover:border-b-2 hover:border-solid hover:border-black hover:font-bold lg:my-0"
                  itemname="Journal"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
