import { Link } from "react-router"

export default function GameCard(game) {
    return (
        <div className="square-game-card">
            <Link to={`/games/${game._id}/details`}>
                <img src={game.imageUrl} alt="Game" />
                <div className="square-game-info">
                    <h3>{game.title}</h3>
                </div>
            </Link>
        </div>
    )
}