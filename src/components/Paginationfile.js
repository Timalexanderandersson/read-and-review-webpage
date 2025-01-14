import React from "react";
import { Pagination } from "react-bootstrap";
/**
 * Paginationfile is function to paginate pages on the website.
 * Function is counting posts done and make pagination for them.
 * 
 */

const Paginationfile = ({ postEachpage, totalPost, paginate }) => {
  const pagenumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postEachpage); i++) {
    pagenumbers.push(i);
  }

  return (
    <Pagination className="d-flex justify-content-center">
      {pagenumbers.map((number) => (
        <Pagination.Item onClick={() => paginate(number)} key={number}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Paginationfile;
