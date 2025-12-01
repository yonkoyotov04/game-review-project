import { useEffect, useState } from "react";
import { Link } from "react-router";
import GameCard from "../gameCard/GameCard.jsx";
import request from "../../utils/requester.js";
import useFetch from "../../hooks/useFetch.js";
import Categories from "./Categories.jsx";
import betterUseFetch from "../../hooks/betterUseFetch.js";

export default function Home() {

    const [games, setGames] = useState([]);

    const { isLoading } = betterUseFetch('/', setGames);

    return (
        <>
            <section className="popular-games">
                <div className="popular-games-header">
                    <h2 className="section-title">Most Popular Games</h2>
                </div>
                <div className="square-game-grid">
                    {isLoading ? <p className="section-title">Loading...</p>
                        :
                        <>
                            {games.map(game => <GameCard key={game.title} {...game} />)}
                            {games.length === 0 && <p className="section-title">There are no games yet...</p>}
                        </>
                    }
                </div>
            </section>

            <Categories />
        </>
    )
}