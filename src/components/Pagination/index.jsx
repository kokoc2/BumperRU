import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = (props) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  function Items({ currentItems }) {
    return <>{currentItems && currentItems.map((item) => <div>{item}</div>)}</>;
  }

  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };
  }

  return (
    <ReactPaginate
      className='Pagination'
      breakLabel='...'
      nextLabel='>'
      onPageChange={(event) => props.onChangeSelected(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel='<'
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
