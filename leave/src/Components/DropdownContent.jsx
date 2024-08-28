import React from 'react'


const DropdownContent = ({children, onClick}) => {
  return (
    <div className='dropdown-contents p-0.5 m-0.5 w-full rounded-sm cursor-pointer z-10' onClick={onClick}>
        {children}
    </div>
  )
}

export default DropdownContent
