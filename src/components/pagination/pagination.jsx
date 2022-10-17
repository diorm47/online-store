import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Cards from "../cards/cards";
import "./pagination.css";
import ScrollButton from "./../scroll-button/scroll-button";

function Pagination({ itemsPerPage, items, dropValue }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="items">
        <Cards carts_data={currentItems} />
      </div>
      <div className="pagination_top">
        <ReactPaginate
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< "
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
        <ScrollButton />
      </div>
    </>
  );
}

export default Pagination;
