import React from 'react';
import './Paging.css';
import Pagination from 'react-js-pagination';

function Paging({ page, count, setPage }) {
  return (
    <div className='fix-pos-pagination'>
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={'‹'}
        nextPageText={'›'}
        onChange={setPage}
      />
    </div>
  );
}

export default Paging;
