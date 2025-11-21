export default function Login() {
    return (
        <section id="login">
            <div className="auth-form">
                <h3 className="form-title">Login</h3>
                <form id="authForm" method="POST">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" value="" required />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                </form>
            </div>
        </section>
    )
}