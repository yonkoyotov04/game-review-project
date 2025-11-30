import { useContext, useEffect, useState } from "react";
import ProfileReviewSection from "../review-section/ProfileReviewSection.jsx";
import UserContext from "../../contexts/userContext.js";
import request from "../../utils/requester.js";
import { Link, useParams } from "react-router";
import ProfileOwnerContext from "../../contexts/ProfileOwnerContext.js";
import useDelete from "../../hooks/useDelete.jsx";

export default function Profile() {
    const { userId } = useParams();
    const { user } = useContext(UserContext);
    const [profileData, setProfileData] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const { DeleteBox, onDeleteClick } = useDelete('profile', user._id);

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
                    <p className="user-bio">{profileData.bio ? `"${profileData.bio}"` : ''}</p>
                </div>
            </div>

            <ProfileOwnerContext.Provider value={{ isOwner: isOwner }}>
                {userId && <ProfileReviewSection id={userId} />}
            </ProfileOwnerContext.Provider>

            {DeleteBox}

            {isOwner ? (<div className="profile-actions">
                <Link to="/profile/edit"><button className="edit-btn">Edit Profile</button></Link>
                <button onClick={onDeleteClick} className="delete-btn">Delete Profile</button>
            </div>) : ''}
        </section>
    )
}