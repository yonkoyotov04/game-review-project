import { useContext, useState} from "react";
import UserContext from "../../contexts/UserContext.jsx";
import { useNavigate } from "react-router";
import useControlledForm from "../../hooks/useControlledForm.js";
import useFetch from "../../hooks/useFetch.js";

export default function EditProfile() {
    const { user } = useContext(UserContext);
    const userId = user?._id;
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({username: '', bio: '', profilePic: ''});

    const {fetcher} = useFetch(`/auth/${userId}/profile`, setInitialValues);

    const onSubmit = async (values) => {
        const data = { ...values };

        fetcher(`/auth/profile/${userId}/edit`, 'PUT', data, {accessToken: user?.accessToken})
            .then(() => {
                navigate(`/profile/${userId}`);
            });
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit)

    return (
        <section id="edit">
            <div className="auth-form">
                <h3 className="form-title">Edit Profile</h3>
                <form id="authForm" method="POST" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" onChange={changeHandler} value={values.username} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio" onChange={changeHandler} value={values.bio}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilePic">Profile Picture</label>
                        <input type="text" id="profilePic" name="profilePic" onChange={changeHandler} value={values.profilePic} required />
                    </div>
                    <button type="submit" className="submit-btn">Apply Changes</button>
                </form>
            </div>
        </section>
    )
}