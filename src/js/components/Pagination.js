import React from 'react';
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

const Pagination = ({changepage, currentPage, totalPages}) => {
    let pagesNumber = [];
    const nextpage = currentPage+1;
    const backpage = currentPage-1;
    for (let index = 0; index < totalPages; index++) {
        const selectedCLass = currentPage == index ? 'pagenumber selected' : 'pagenumber' ;

        pagesNumber.push(<button className={selectedCLass} key={index} onClick={() => changepage(index)}>
            {index + 1}
        </button>
        );
        // if (index == currentPage) {
        // }
        // if (index == backpage && backpage >= 0) {
        //     pagesNumber.push(<button className={selectedCLass} key={index} onClick={() => changepage(index)}>
        //         {index + 1}
        //     </button>
        //     );
        // }
        // if (index == nextpage && nextpage < totalPages) {
        //     pagesNumber.push(<button className={selectedCLass} key={index} onClick={() => changepage(index)}>
        //         {index + 1}
        //     </button>
        //     );
        // }
        
        
        
        // if (index == totalPages-1) {
        //     pagesNumber.push(<span>...</span> )
        //     pagesNumber.push(<button className={selectedCLass} key={index} onClick={() => changepage(index)}>
        //         {index + 1}
        //     </button>
        //     );
        // }
    }

    console.log('pagesNumber', pagesNumber)
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