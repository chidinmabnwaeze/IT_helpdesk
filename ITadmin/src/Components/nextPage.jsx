import React from 'react'

const NextPage = ({currentPage , totalPages, handlePreviousPage, handleNextPage}) => {

  return (
    <>
    <div className='flex justify-end items-center p-3 m-4'>
        <button className='page p-2 text-sm'
        onClick={handlePreviousPage}>Prev</button>
        <button className='page-no px-2 py-1 mr-4 border rounded border-spacing-2'><a href="">1</a></button>
        <button className='page-no px-2 py-1 mr-4 border rounded border-spacing-2'><a href="">2</a></button>
        <button className='page-no px-2 py-1 mr-4 border rounded border-spacing-2'><a href="">3</a></button>
        <button className='page-no px-2 py-1 mr-4 border rounded border-spacing-2'><a href="">4</a></button>
        <button className='page px-2 py-1 mr-4  font-semibold'>...</button>
        <button className='page-no px-2 py-1 mr-4 border rounded border-spacing-2'><a href="">10</a></button>
        <button className='page p-2 text-sm border-none' onClick={handleNextPage}>Next</button>
       
    </div>
        <span className='flex justify-end items-center text-sm p-3 m-4'>{`Page ${currentPage} of ${totalPages}`}</span>
        </>
  )
}

export default NextPage