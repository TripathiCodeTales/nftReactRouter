import React, { useState } from "react";
import Modal from './Modal';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [admin, setAdmin] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [errors, setErrors] = useState({});
    const database = {
        Email: "arpitatripathi@gmail.com",
        Password: "9425091265"
    }
    const navigate = useNavigate();
    const Toggle = () => setAdmin(!admin);
    const handleSubmit = (event) => {
        event.preventDefault();
        var [umail, pass] = [document.forms[0].elements[0], document.forms[0].elements[1]];
        if (umail.value !== database.Email) {
            setErrors({ name: "umail", message: "Invalid email address" });
        } else if (pass.value !== database.Password) {
            setErrors({ name: "pass", message: "Invalid password" });
        } else {
            setIsSubmit(true);
            navigate("/CardList");
        }

    }

    const renderErrorMessage = (name) =>
        name === errors.name && <div className="error">{errors.message}</div>


    return (
        <div id="Login">
            <div id="Form">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <h1 style={{ fontSize: 30 }}> Sign In</h1>
                        <label>Email</label>
                        <input type="Email" placeholder="Email*" name="umail" required />
                        {renderErrorMessage("umail")}
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" placeholder="Password*" required />
                        {renderErrorMessage("pass")}
                    </div>
                    <div>
                        <button type="submit" className="submit-button"><strong>Login</strong></button>
                    </div>
                </form>
                <button onClick={() => Toggle()} className="adminBox">
                    Switch to Admin
                </button>
                <Modal show={admin}
                    close={Toggle}
                    database={database}
                />
            </div>
        </div>
    )
}
