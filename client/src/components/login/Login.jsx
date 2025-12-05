import { useContext, useState } from "react"
import UserContext from "../../contexts/UserContext.jsx"
import { useNavigate } from "react-router";
import useControlledForm from "../../hooks/useControlledForm.js";
import useFetch from "../../hooks/useFetch.js";

export default function Login() {
    const { fetcher } = useFetch()
    const { loginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({email: '', password: ''});

    const onSubmit = async(values) => {
        const data = values;

        const result = await fetcher('/auth/login', 'POST', data);

        loginHandler(result);
        navigate('/');
    }

    const {values, changeHandler, submitHandler} = useControlledForm(initialValues, onSubmit);

    return (
        <section id="login" className="loginSection">
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