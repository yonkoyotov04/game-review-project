import ReviewCard from "../review-card/ReviewCard.jsx";
import ReviewSection from "../review-section/ReviewSection.jsx";

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

            <ReviewSection mode="user" />

            <div className="profile-actions">
                <a href="/auth/profile/edit"><button className="edit-btn">Edit Profile</button></a>
                <a href="/auth/profile/delete"><button className="delete-btn">Delete Profile</button></a>
            </div>
        </section>
    )
}