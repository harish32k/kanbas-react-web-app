import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div className="col-5">
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <input
                placeholder="Enter the Username"
                value={credentials.username}
                className="form-control"
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })} />
            <br />
            <input
                placeholder="Enter the Password"
                type="password"
                value={credentials.password}
                className="form-control"
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })} />
            <br />
            <button onClick={signup}
                className="btn btn-primary">
                Signup
            </button>
        </div>
    );
}
export default Signup;