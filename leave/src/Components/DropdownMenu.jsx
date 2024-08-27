import React, { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownItems from "./DropdownItems";

const DropdownMenu = ({buttonText, content}) => {
const [open, setOpen] = useState(false);
const toggleDown =() =>{
    setOpen((open)=>!open)
}

  return (
    <div className="relative">
      <DropdownButton open ={open} 
      toggle={toggleDown}>
        {buttonText}
        </DropdownButton>
      <DropdownItems open ={open}>
        {content}
        </DropdownItems>
    </div>
  );
};

export default DropdownMenu;
