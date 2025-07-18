import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxVisiblePages = 5; 

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (totalPages - endPage < Math.floor(maxVisiblePages / 2)) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-2">
      <ul className="inline-flex  rounded-[0.25rem]">
        {
          startPage > 1 && (
            <li className="inline-flex mr-[0.5rem] duration-100">
              <a className="py-[0.5rem] px-[0.75rem] hover:bg-s-black cursor-pointer rounded-full" onClick={() => onPageChange(1)}>
                1
              </a>
            </li>
          ) 
        }
        {
          startPage > 2 && (
            <li className="inline-flex mr-[0.5rem] h-fit mt-1 ml-2 duration-100">
              <span className='text-center'>...</span>
            </li>
          )
        }
        {
          pageNumbers.map(number => (
            <li
              key={number}
              className={`inline-flex mr-[0.5rem] duration-100 ${
                currentPage === number ? 'bg-medium-or text-black rounded-full' : ''
              }`}
            >
              <a className={`py-[0.5rem] px-[0.75rem] cursor-pointer rounded-full ${currentPage === number ? 'hover:bg-medium-or' : 'hover:bg-s-black'}`} onClick={() => onPageChange(number)}>
                {number}
              </a>
            </li>
          ))
        }
        {
        endPage < totalPages - 1 && (
            <li className="inline-flex mr-[0.5rem] h-fit mt-1 ml-2 duration-100">
              <span className='text-center'>...</span>
            </li>
          )
        }
        {
          endPage < totalPages && (
            <li className="inline-flex mr-[0.5rem] duration-100">
              <a className="py-[0.5rem] px-[0.75rem] hover:bg-s-black cursor-pointer rounded-full " onClick={() => onPageChange(totalPages)}>
                {totalPages}
              </a>
            </li>
          )
        }
      </ul>
    </nav>
  );
};

export default Pagination;