import { Link } from "react-router"

export default function GameCard({_id, title, imageUrl}) {
    return (
        <div className="square-game-card">
            <Link to={`/games/${_id}/details`}>
                <img src={imageUrl} alt="Game" />
                <div className="square-game-info">
                    <h3>{title}</h3>
                </div>
            </Link>
        </div>
    )
}