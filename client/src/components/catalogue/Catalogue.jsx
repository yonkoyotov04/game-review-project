import { useState } from "react";
import GameCard from "../gameCard/GameCard.jsx";
import { useParams } from "react-router";
import Pagination from "../pagination/Pagination.jsx";
import useFetch from "../../hooks/useFetch.js";
import useControlledForm from "../../hooks/useControlledForm.js";

export default function Catalogue() {
    let { category } = useParams();
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(24);
    const [initialValues, setInitialValues] = useState({ searchBy: '', input: '' })

    const { fetcher, isLoading } = useFetch('/games', setGames, { category });

    const lastGameIndex = currentPage * gamesPerPage;
    const firstGameIndex = lastGameIndex - gamesPerPage;

    const displayedGames = games.slice(firstGameIndex, lastGameIndex);

    const onSubmit = async (values) => {
        let url = `/games/?${values.searchBy}=${values.input}`;

        if (category) {
            url += `&genre=${category}`
        }
        const result = await fetcher(url);
        setGames(result);
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit)

    return (
        <section className="games-list">
            <h2 className="section-title">{category ? `${category}` : 'All'} Games</h2>

            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <select className="search-by" name="searchBy" id="searchBy" onChange={changeHandler} value={values.searchBy}>
                        <option value="">Search By</option>
                        <option value="title">Title</option>
                        <option value="developers">Developers</option>
                        <option value="platforms">Platform</option>
                    </select>
                    <input type="text" id="gameSearch" name='input'
                        onChange={changeHandler}
                        value={values.input} placeholder="Search for games..." />
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