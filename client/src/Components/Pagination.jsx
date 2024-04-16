import React from "react";
import { Button } from "react-bootstrap";

const PaginationFunction = ({ totalposts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalposts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <Button
            className="m-2"
            size="lg"
            variant="danger"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default PaginationFunction;
