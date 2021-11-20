import React, { useMemo } from "react";

const Paginator = ({ limit, totalLimit, paginate }) => {
  const pageNumbers = useMemo(
    () => new Array(Math.ceil(totalLimit / limit)).fill(0).map((_, i) => i + 1),
    [totalLimit, limit]
  );

  return (
    <div>
      {pageNumbers.map((number) => (
        <span key={number}>
          {" "}
          <a href="!#" onClick={() => paginate(number)}>
            {number}
          </a>
        </span>
      ))}
    </div>
  );
};

export default Paginator;
