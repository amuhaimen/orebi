import React from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { useState } from "react";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown }) => {
  let [show, setShow] = useState(false);
  let [drop, setDrop] = useState(dropDown);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3>Shop by Cetegory</h3>
          <VscTriangleDown />
        </div>
      ) : (
        <h3>Shop by Cetegory</h3>
      )}

      {show && (
        <div>
          <LeftSidebarItem title="A-1" dropDown={true} />
          <LeftSidebarItem title="B-2" dropDown={false} />
          <LeftSidebarItem title="C-3" dropDown={true} />
          <LeftSidebarItem title="D-4" dropDown={false} />
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
