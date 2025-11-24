import { useEffect, useState } from "react";
import GameCard from "../gameCard/GameCard.jsx";
import request from "../../utils/requester.js";
import { useParams } from "react-router";
import Pagination from "../pagination/Pagination.jsx";

export default function Catalogue() {
    let { category } = useParams();
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(24);

    if (category) {
        if (['rpg', 'fps', 'mmo'].includes(category)) {
            category = category.toUpperCase();
        } else {
            category = category[0].toUpperCase() + category.slice(1);
        }
    }

    useEffect(() => {
        request('/games')
            .then(result => {
                if (category) {
                    result = result.filter(game => game.genre === category);
                }
                setGames(Object.values(result));
            })
            .catch(err => alert(err.message));
    }, [])

    const lastGameIndex = currentPage * gamesPerPage;
    const firstGameIndex = lastGameIndex - gamesPerPage;

    const displayedGames = games.slice(firstGameIndex, lastGameIndex);

    console.log(displayedGames);

    return (
        <section className="games-list">
            <h2 className="section-title">{category ? `${category}` : 'All'} Games</h2>

            <div className="search-bar">
                <form method="GET">
                    <input type="text" id="gameSearch" name="title" value="" placeholder="Search for a game..." />
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>

            <div className="square-game-grid">
                {displayedGames.map(game => <GameCard key={game._id} {...game} />)}
                {games.length === 0 && <p className="section-title">There are no {category ? `${category}` : ''} games yet...</p>}
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