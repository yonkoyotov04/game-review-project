export default function Register() {
    return (
        <section id="register">
            <div className="auth-form">
                <h3 className="form-title">Register</h3>
                <form id="authForm" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" value="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePassword">Repeat Password</label>
                        <input type="password" id="rePassword" name="rePassword" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilePic">Profile Picture</label>
                        <input type="text" id="profilePic" name="profilePic" value="" required />
                    </div>
                    <button type="submit" className="submit-btn">Register</button>
                </form>
            </div>
        </section>
    )
}