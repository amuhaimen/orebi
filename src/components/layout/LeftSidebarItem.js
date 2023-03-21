import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

const LeftSidebarItem = ({ dropDown, title }) => {
  let [show, setShow] = useState(false);
  let [drop, setDrop] = useState(dropDown);
  return (
    <>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex items-center justify-between"
        >
          <h3>{title}</h3>
          <VscTriangleDown />
        </div>
      ) : (
        <h3>{title}</h3>
      )}

      {show && (
        <div>
          <p>hello bangladesh</p>
          <p>hello bangladesh</p>
          <p>hello bangladesh</p>
          <p>hello bangladesh</p>
          <p>hello bangladesh</p>
        </div>
      )}
    </>
  );
};

export default LeftSidebarItem;
