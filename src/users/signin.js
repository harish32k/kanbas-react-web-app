import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/project/account");
    };
    return (
        <div className="col-5">
            <h1>Signin</h1>
            <input className="form-control" value={credentials.username} placeholder="Enter the Username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <br/>
            <input className="form-control" value={credentials.password} placeholder="Enter the Password" type="password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <br/>
            <button onClick={signin} className="btn btn-primary"> Signin </button>
        </div>
    );
}
export default Signin;
