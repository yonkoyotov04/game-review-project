import { useEffect, useState } from "react";
import { Link } from "react-router";
import GameCard from "../gameCard/GameCard.jsx";
import request from "../../utils/requester.js";
import useFetch from "../../hooks/useFetch.js";

export default function Home() {

    const [games, setGames] = useState([]);

    const { isLoading, error, refetch } = useFetch('/', setGames);

    if (error) {
        console.error(error);
    }

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

            <section className="categories">
                <h2 className="section-title">Browse by Category</h2>
                <div className="category-grid">
                    <Link to="/games/action">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Action</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/adventure">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Adventure</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/rpg">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>RPG</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/fighting">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Fighting</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/fps">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>FPS</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/simulation">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Simulation</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/strategy">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Strategy</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/horror">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Horror</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/sports">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Sports</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/racing">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Racing</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/tactical">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Tactical</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to="/games/mmo">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>MMO</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}