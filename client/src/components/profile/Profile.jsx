import ReviewCard from "../review-card/Review-Card.jsx";

export default function Profile() {
    return (
        <section className="profile" id="profile">
            <div className="profile-header">
                <div className="profile-pic">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUrtSJqWoJj7sDEbQIfB9_UHFRqhmg9Znuw&s" alt="Profile Picture" />
                </div>
                <div className="profile-info">
                    <h1 className="username">YonkoYotov</h1>
                    <p className="user-bio">“I like games!”</p>
                </div>
            </div>

            <div className="reviews-showcase">
                <h3 className="reviews-title">Reviews</h3>

                <div className="reviews-container">
                    <ul className="review-list">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <p className="section-title">There are no reviews yet...</p>
                    </ul>
                </div>
        
                <div className="reviews-pagination">
                    <button className="page-btn prev">← Previous</button>
                    <div className="page-numbers">
                        <button className="page-number active">1</button>
                        <button className="page-number">2</button>
                        <button className="page-number">3</button>
                    </div>
                    <button className="page-btn next">Next →</button>
                </div>
            </div>

            <div className="profile-actions">
                <a href="/auth/profile/edit"><button className="edit-btn">Edit Profile</button></a>
                <a href="/auth/profile/delete"><button className="delete-btn">Delete Profile</button></a>
            </div>
        </section>
    )
}