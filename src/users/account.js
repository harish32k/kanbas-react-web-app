import * as client from "./client";
import { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

function Account() {
    const [account, setAccount] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };
    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);

    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <br />
                    <input value={account.password}
                        placeholder="enter password"
                        className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <br />
                    <input value={account.firstName}
                        placeholder="enter first name"
                        className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <br />
                    <input value={account.lastName}
                        placeholder="enter last name"
                        className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <br />
                    <input type="date"
                        // selected={selectedDate} 
                        value={account.dob}
                        placeholder="enter date of birth"
                        className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })}
                        dateFormat="yyyy-MM-dd"
                    />
                    {/* <input value={account.dob}
                        placeholder="enter date of birth"
                        className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} /> */}
                    <br />
                    <input value={account.email}
                        placeholder="enter email"
                        className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <br />
                    <select
                        className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            role: e.target.value
                        })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <br />
                    <button onClick={save} className="btn btn-primary w-100">
                        Save
                    </button>

                    <button onClick={signout} className="btn btn-danger w-100">
                        Signout
                    </button>

                    <Link to="/project/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>

                </div>
            )}
        </div>
    );
}
export default Account;