import React from "react";
import "./Pagination.css"

const Pagination = ({totalPokemons, pokemonsPerPage, setCurrentPage, currentPage}) => {
    const pages = [];

    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++){
        pages.push(i);
    };

    return (
        <div className="paginationBar">
            {pages.map((page, index) => {
                return <button
                            className="buttonPagination"
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            id={page === currentPage ? "active" : ""}
                        >
                            {page}
                        </button>
            })}
        </div>
    )
};

export default Pagination;