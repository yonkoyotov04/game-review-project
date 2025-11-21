export default function ReviewCard() {
    return (
        <li className="review-list-item">
            <div className="review-card">
                <div className="review-header">
                    <div>
                        <span className="review-game-title">Hollow Knight: Silksong</span>
                        <span><a href="/games/{{game.id}}/details"><img src="https://assets-prd.ignimgs.com/2025/04/02/nintendoswitch2-hollow-knight-silksong-keyart-square-1743636317910.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80"
                            alt="Hollow Knight: Silksong" className="game-icon" /></a></span>
                    </div>
                    <div>
                        <a href="/reviews/{{id}}/edit"><svg
                            style={{ marginRight: 10 }}
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"
                                stroke="url(#grad)"
                                strokeWidth={2}
                                fill="none"
                            />
                            <path
                                d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                                stroke="url(#grad)"
                                strokeWidth={2}
                                fill="none"
                            />
                            <defs>
                                <linearGradient id="grad" x1={0} y1={0} x2={24} y2={24}>
                                    <stop offset="0%" stopColor="#FF5E00" />
                                    <stop offset="100%" stopColor="#00B2FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        </a>
                        <a href="/reviews/{{id}}/delete"><svg
                            style={{ marginRight: 10 }}
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="trashLid" x1={0} y1={0} x2={24} y2={24}>
                                    <stop offset="0%" stopColor="#FF5E00" />
                                    <stop offset="100%" stopColor="#00B2FF" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M5 7h14c0-2-2.5-4-7-4s-7 2-7 4z"
                                stroke="url(#trashLid)"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9 5c0-1 1.5-2 3-2s3 1 3 2"
                                stroke="url(#trashLid)"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                            />
                            <path
                                d="M6 7v11c0 2 1.5 4 3 4h6c1.5 0 3-2 3-4V7"
                                stroke="url(#trashLid)"
                                strokeWidth={2}
                                fill="none"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10 11v7"
                                stroke="url(#trashLid)"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                            <path
                                d="M14 11v7"
                                stroke="url(#trashLid)"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        </a>
                    </div>
                </div>
                <p className="review-text">Very good game!</p>
                <div className="review-footer">
                    <span className="stars">⭐ 10/10</span>
                    <span className="playTime">⏲ 12 hours</span>
                </div>
            </div>
        </li>
    )
}