import { useState } from "react";
import GameCard from "../gameCard/GameCard.jsx";
import { useParams } from "react-router";
import Pagination from "../pagination/Pagination.jsx";
import useFetch from "../../hooks/useFetch.js";

export default function Catalogue() {
    let { category } = useParams();
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(24);

    const { isLoading } = useFetch('/games', setGames, {category});

    const lastGameIndex = currentPage * gamesPerPage;
    const firstGameIndex = lastGameIndex - gamesPerPage;

    const displayedGames = games.slice(firstGameIndex, lastGameIndex);

    return (
        <section className="games-list">
            <h2 className="section-title">{category ? `${category}` : 'All'} Games</h2>

            <div className="search-bar">
                <form>
                    <input type="text" id="gameSearch" name="title" placeholder="Search for a game..." />
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>

            <div className="square-game-grid">
                {isLoading ? <p className="section-title">Loading...</p>
                    :
                    <>
                        {displayedGames.map(game => <GameCard key={game._id} {...game} />)}
                        {games.length === 0 && <p className="section-title">There are no {category ? `${category}` : ''} games yet...</p>}
                    </>}
            </div>

            {games.length > 24 && <Pagination
                totalGames={games.length}
                gamesPerPage={gamesPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />}
        </section>
    )
}