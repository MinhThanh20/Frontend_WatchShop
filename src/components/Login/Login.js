import React from "react";
import './Login.scss'
import { Link } from "react-router-dom";
function Login() {
    return (
        <>
            <div class="login-page">
                <div class="form">
                    {/* <form class="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p class="message">Already registered? <a href="#">Sign In</a></p>
                    </form> */}
                    <form class="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p class="message">Not registered?
                            <Link to ='/register'>Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login