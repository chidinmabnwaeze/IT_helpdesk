import React from "react";

const DropdownItems = ({ children, open }) => {
  return (
    <div
      className={`absolute min-w-full hidden flex-col bg-white rounded-sm items-center p-4 mt-1.5 shadow-sm max-h-[40%] overflow-y-scroll no-scrollbar ${open ? "content-open" : null}`}
    >
      {children}
      {/* {items.map((item)=>(
<DropdownItems/>
        ))} */}
    </div>
  );
};

export default DropdownItems;
