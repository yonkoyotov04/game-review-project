import { useContext, useState } from "react";
import ProfileReviewSection from "../review-section/ProfileReviewSection.jsx";
import UserContext from "../../contexts/UserContext.js";
import { Link, useParams } from "react-router";
import ProfileOwnerContext from "../../contexts/ProfileOwnerContext.js";
import useDelete from "../../hooks/useDelete.jsx";
import useFetch from "../../hooks/useFetch.js";

export default function Profile() {
    const { userId } = useParams();
    const { user } = useContext(UserContext);
    const { DeleteBox, onDeleteClick } = useDelete('profile', user._id);
    const [profileData, setProfileData] = useState({});
    const isOwner = userId === user?._id;

    useFetch(`/auth/${userId}/profile`, setProfileData)

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