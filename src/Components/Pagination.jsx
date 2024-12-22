import React from "react";

const Pagination = ({ currentPage, setPage }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <button className="page-link" onClick={() => setPage(currentPage - 1)}>
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => setPage(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
