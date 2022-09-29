import React from "react";
import { Link } from "react-router-dom";
import './Register.scss'
function Register() {
    return (
        <>
            <div class="login-page">
                <div class="form">
                    <form class="login-form">
                        <input type="text" placeholder="email address" />
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>create</button>
                        <p class="message">Already registered?
                            <Link to='/login'>Sign In</Link>
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Register