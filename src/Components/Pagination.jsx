import React from "react";

const Pagination = ({ currentPage = 1, totalPages = 8, onPageChange }) => {
  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5; // Number of pages before showing ellipses

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      for (let i = 1; i <= maxVisiblePages; i++) {
        pages.push(renderPageButton(i));
      }
      if (currentPage + maxVisiblePages <= totalPages) {
        pages.push(
          <span key="ellipsis" className="mx-1">
            ...
          </span>
        );
      }
      pages.push(renderPageButton(totalPages));
    }
    return pages;
  };

  const renderPageButton = (pageNum) => {
    return (
      <button
        key={pageNum}
        className={`bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-1 focus:outline-none 
          ${currentPage === pageNum ? "font-bold" : ""}`}
        // onClick={() => onPageChange(pageNum)}
      >
        {pageNum}
      </button>
    );
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        disabled={currentPage === 1}
        // onClick={() => onPageChange(currentPage - 1)}
        className="bg-amber-500 text-white rounded-full w-14 h-8 flex items-center justify-center mx-1 focus:outline-none"
      >
        Prev
      </button>
      {renderPagination()}
      <button
        disabled={currentPage === totalPages}
        // onClick={() => onPageChange(currentPage + 1)}
        className="bg-amber-500 text-white rounded-full w-14 h-8 flex items-center justify-center mx-1 focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
