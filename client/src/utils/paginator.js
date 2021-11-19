import React from "react";


const Paginator = ({ limit, totalLimit, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalLimit / limit); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            {pageNumbers.map(number => (
                <span key={number}> <a href="!#" onClick={() =>
                     paginate(number)}>{number}</a></span>
            ))
            }
        </div>
    )
}

export default Paginator