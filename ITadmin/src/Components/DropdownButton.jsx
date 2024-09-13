import React from 'react'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'

const DropdownButton = ({children, open ,toggle}) => {
  return (
    <div onClick={toggle} className={`assign flex justify-center items-center py-1.5 rounded-md cursor-pointer ${open ? "button-open" : null}`}>
        {children}
        <span className='toggle-icon'>{open ? <FaChevronUp/> :<FaChevronDown/>}</span>
    </div>
  )
}

export default DropdownButton