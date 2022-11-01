import React from "react";
import "./Pagination.css";

const Pagination = ({
        totalPokemons,
        pokemonsPerPage,
        setCurrentPage,
        currentPage,
        pageNumberLimit,
        maxPageNumberLimit,
        setMaxPageNumberLimit,
        minPageNumberLimit,
        setMinPageNumberLimit
    }) => {
    const pages = [];

    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++){
        pages.push(i);
    };
    const handleClickPrev = () => {
        setCurrentPage(currentPage - 1);

        if((currentPage - 1) % pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }
    const handleClickNext = () => {
        setCurrentPage(currentPage + 1);

        if(currentPage + 1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    return (
        <div className="paginationBar">
            <button className="buttonPag" id={currentPage === 1 ? "noButton" : null}>
                <img src="https://www.pngrepo.com/download/166242/left-arrow.png"
                    alt="previous"
                    onClick={handleClickPrev}
                />
            </button>
            {pages.map((page, index) => {
                if(page < maxPageNumberLimit + 1 && page > minPageNumberLimit){
                    return <button
                                className="buttonPagination"
                                key={index}
                                onClick={() => setCurrentPage(page)}
                                id={page === currentPage ? "active" : null}
                            >
                                {page}
                            </button>
                } else { return null }
            })}
            <button className="buttonPag" id={currentPage === pages.length ? "noButton" : null}>
                <img src="https://www.pngrepo.com/download/166242/left-arrow.png"
                    alt="next"
                    id="nextButton"
                    onClick={handleClickNext}
                />
            </button>
        </div>
    )
};

export default Pagination;