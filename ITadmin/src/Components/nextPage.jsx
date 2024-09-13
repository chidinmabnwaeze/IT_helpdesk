import React from 'react'

const nextPage = () => {
  return (
    <div className='flex justify-end items-center p-3 m-4'>
        <div className='p-2 text-sm'><a href="">Prev</a></div>
        <button className='page-no p-1.5 mr-4 border rounded border-spacing-2'><a href="">1</a></button>
        <button className='page-no p-1.5 mr-4 border rounded border-spacing-2'><a href="">2</a></button>
        <button className='page-no p-1.5 mr-4 border rounded border-spacing-2'><a href="">3</a></button>
        <button className='page-no p-1.5 mr-4 border rounded border-spacing-2'><a href="">4</a></button>
        <button className=' p-1.5 mr-4  font-semibold'>...</button>
        <button className='page-no p-1.5 mr-4 border rounded border-spacing-2'><a href="">10</a></button>
        <div className='p-2 text-sm'><a href="">Next</a></div>
       
    </div>
  )
}

export default nextPage