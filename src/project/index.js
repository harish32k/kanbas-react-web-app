import Nav from "../Nav";
import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./nav";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
// import Nav from "./nav";
function Project() {

    return (
        <>
            <Nav />
            <div className="row">
                <div className="col-2" style={{ display: "inline" }}>
                    <Navigation />
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="/project/signin" />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/admin/users" element={<UserTable />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
            </div>
        </>

    );
}
export default Project;