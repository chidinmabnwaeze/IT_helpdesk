import React from 'react'


const DropdownContent = ({children, onClick}) => {
  return (
    <div className='dropdown-contents p-1 m-3 h-60 w-full rounded-sm cursor-pointer z-50' onClick={onClick}>
        {children}
    </div>
  )
}

export default DropdownContent
