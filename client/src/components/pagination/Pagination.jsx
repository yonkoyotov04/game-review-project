export default function Pagination({ totalGames, gamesPerPage, currentPage, setCurrentPage }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pages.push(i);
    }

    const pageButtonHandler = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const previousButtonHandler = () => {
        setCurrentPage((state) => state - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const nextButtonHandler = () => {
        setCurrentPage((state) => state + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="pagination">
            {currentPage === 1 || <button className="page-btn prev" onClick={previousButtonHandler}>← Previous</button>}
            <div className="page-numbers">
                {pages.map((page, i) => {
                    return <button
                        key={i}
                        className={page === currentPage ? 'page-number active' : 'page-number'}
                        onClick={() => pageButtonHandler(page)}>{page}</button>
                })}
            </div>
            {currentPage === pages[pages.length - 1] || <button className="page-btn next" onClick={nextButtonHandler}>Next →</button>}
        </div>
    )
}