import React from 'react'

const DropdownItems = ({children}) => {
    const items =[
        "Abubakar Sadiq",
        "Abubakar Sadiq",
        "Damian Abel",
        "Abubakar Sadiq",
        "Joshua Duke",
        "Abubakar Sadiq",
        "Abubakar Sadiq"
    ]
  return (
    <div className='absolute min-w-full flex flex-col bg-white rounded-sm items-center p-4 mt-1.5 shadow-sm max-h-[40%] overflow-y-scroll no-scrollbar'>
        {children}
    </div>
  )
}

export default DropdownItems