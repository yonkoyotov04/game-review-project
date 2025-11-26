import { useContext } from "react"
import UserContext from "../../contexts/userContext.js"
import { useNavigate } from "react-router";
import request from "../../utils/requester.js";
import useControlledForm from "../../hooks/useControlledForm.js";

export default function Login() {

    const {loginHandler} = useContext(UserContext);
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = async(values) => {
        const data = values;

        const result = await request('/auth/login', 'POST', data);

        loginHandler(result);
        navigate('/');
    }

    const {values, changeHandler, submitHandler} = useControlledForm(initialValues, onSubmit);

    return (
        <section id="login">
            <div className="auth-form">
                <h3 className="form-title">Login</h3>
                <form id="authForm" method="POST" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" onChange={changeHandler} value={values.email} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={changeHandler} value={values.password} name="password" required />
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                </form>
            </div>
        </section>
    )
}