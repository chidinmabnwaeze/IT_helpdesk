import React, { useState, useEffect, useRef } from "react";
import DropdownButton from "./DropdownButton";
import DropdownItems from "./DropdownItems";

const DropdownMenu = ({ buttonText, content }) => {
  const [open, setOpen] = useState(false);
  const toggleDown = () => {
    setOpen((open) => !open);
  };
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
      document.addEventListener("click" ,handler)

      return () =>{
      document.removeEventListener("click", handler)
    }
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <DropdownButton open={open} toggle={toggleDown}>
        {buttonText}
      </DropdownButton>
      <DropdownItems open={open}>{content}</DropdownItems>
    </div>
  );
};

export default DropdownMenu;
