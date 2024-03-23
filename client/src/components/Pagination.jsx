import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center">
      <ul className="inline-flex  rounded-[0.25rem]">
        {
            pageNumbers.map(number => (
                <li
                    key={number}
                    className={`inline-flex mr-[0.5rem] duration-100 ${currentPage === number ? 'bg-light-black' : ''}`}
                >
                    <a
                        href="#!"
                        className="py-[0.5rem] px-[0.75rem]"
                        onClick={() => onPageChange(number)}
                    >
                        { number }
                    </a>
                </li>
            ))
        }
      </ul>
    </nav>
  );
};

export default Pagination;
