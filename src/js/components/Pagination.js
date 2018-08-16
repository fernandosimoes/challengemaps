import React from 'react';
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

const Pagination = ({changepage, currentPage, totalPages}) => {
    let pagesNumber = [];
    let initialpage = 0;

    for (let index = initialpage; index < totalPages ; index++) {
        const selectedCLass = currentPage == index ? 'pagenumber selected' : 'pagenumber' ;

        pagesNumber.push(<button className={selectedCLass} key={index} onClick={() => changepage(index)}>
            {index + 1}
        </button>)
    }

    return (
        <div className="pagination">
            <button className="back" onClick={() => changepage(currentPage-1)}>
                <img src={left} />
            </button>
            {pagesNumber.map(page => page)}
            <button className="next" onClick={() => changepage(currentPage+1)}>
                <img src={right} />
            </button>
        </div>
    )
}

export default Pagination;