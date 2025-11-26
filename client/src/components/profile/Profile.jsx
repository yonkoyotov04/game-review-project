import { useContext, useEffect, useState } from "react";
import ProfileReviewSection from "../review-section/ProfileReviewSection.jsx";
import UserContext from "../../contexts/userContext.js";
import request from "../../utils/requester.js";

export default function Profile() {

    const { user } = useContext(UserContext);
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        if (user._id) {
            request(`/auth/${user._id}/profile`)
                .then(result => {
                    setProfileData(result);
                })
                .catch(err => alert(err.message))
        }
    }, [user._id])

    console.log(profileData);

    return (
        <section className="profile" id="profile">
            <div className="profile-header">
                <div className="profile-pic">
                    <img src={profileData.profilePic} alt="Profile Picture" />
                </div>
                <div className="profile-info">
                    <h1 className="username">{profileData.username}</h1>
                    <p className="user-bio">“{profileData.bio}”</p>
                </div>
            </div>

            {user._id && <ProfileReviewSection id={user._id} />}

            <div className="profile-actions">
                <a href="/auth/profile/edit"><button className="edit-btn">Edit Profile</button></a>
                <a href="/auth/profile/delete"><button className="delete-btn">Delete Profile</button></a>
            </div>
        </section>
    )
}