import { useContext, useEffect, useState } from "react";
import ProfileReviewSection from "../review-section/ProfileReviewSection.jsx";
import UserContext from "../../contexts/userContext.js";
import request from "../../utils/requester.js";
import { useParams } from "react-router";
import OwnerContext from "../../contexts/OwnerContext.js";

export default function Profile() {
    const { userId } = useParams();
    const { user } = useContext(UserContext);
    const [profileData, setProfileData] = useState({});
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        if (userId) {
            request(`/auth/${userId}/profile`)
                .then(result => {
                    setProfileData(result);
                    setIsOwner(userId === user?._id);
                })
                .catch(err => alert(err.message))
        }
    }, [userId])

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

            <OwnerContext.Provider value={{ isOwner: isOwner }}>
                {userId && <ProfileReviewSection id={userId} />}
            </OwnerContext.Provider>

            {isOwner ? (<div className="profile-actions">
                <a href="/auth/profile/edit"><button className="edit-btn">Edit Profile</button></a>
                <a href="/auth/profile/delete"><button className="delete-btn">Delete Profile</button></a>
            </div>) : ''}
        </section>
    )
}