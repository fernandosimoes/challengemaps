import React from 'react';

const Pagination = ({changepage}) => {
    return (
        <div className="pagination">
            <button className="backpage" onClick={() => changepage('decrement')}>back</button>
            <button className="nextpage" onClick={() => changepage('increment')}>next</button>
        </div>
    )
}
export default Pagination;