import { useContext, useState } from "react";
import useControlledForm from "../../hooks/useControlledForm.js"
import request from "../../utils/requester.js";
import UserContext from "../../contexts/userContext.js";
import { useNavigate } from "react-router";

export default function Register() {
    const {loginHandler} = useContext(UserContext)
    const navigate = useNavigate()

    const data = {
        email: '',
        username: '',
        password: '',
        rePassword: '',
        bio: '',
        profilePic: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    const onSubmit = async(values) => {
        const data = values;

        const result = await request('/auth/register', "POST", data);

        loginHandler(result);
        navigate('/');
    }

    const {values, changeHandler, submitHandler}  = useControlledForm(initialValues, onSubmit);

    return (
        <section id="register">
            <div className="auth-form">
                <h3 className="form-title">Register</h3>
                <form id="authForm" method="POST" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" onChange={changeHandler} value={values.email} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" onChange={changeHandler} value={values.username} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={changeHandler} value={values.password} name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePassword">Repeat Password</label>
                        <input type="password" id="rePassword" onChange={changeHandler} value={values.rePassword} name="rePassword" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio" onChange={changeHandler} value={values.bio}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilePic">Profile Picture</label>
                        <input type="text" id="profilePic" name="profilePic" onChange={changeHandler} value={values.profilePic} required />
                    </div>
                    <button type="submit" className="submit-btn">Register</button>
                </form>
            </div>
        </section>
    )
}