export default function Pagination({totalGames, gamesPerPage, currentPage, setCurrentPage}) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pages.push(i);
    }

    const pageButtonHandler = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className="pagination">
            <button className="page-btn prev">← Previous</button>
            <div className="page-numbers">
                {pages.map((page, i) => {
                    return <button 
                    key={i} 
                    className={page === currentPage ? 'page-number active' : 'page-number'} 
                    onClick={() => pageButtonHandler(page)}>{page}</button>
                })}
            </div>
            <button className="page-btn next">Next →</button>
        </div>
    )
}