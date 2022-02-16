import React from "react";
import PaginationComponent from "@mui/material/Pagination";
import { pagination } from "../types";

const Pagination: React.FC<pagination> = ({
  dataLength,
  setCurrentPage,
  perPage,
}) => {
  const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  const numberOfPages = Math.ceil(dataLength / perPage);
  return (
    <div>
      <PaginationComponent
        className="flex justify-center"
        count={numberOfPages}
        color="primary"
        style={{ direction: "ltr" }}
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;
