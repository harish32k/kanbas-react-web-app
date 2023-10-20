import { Route, Routes } from "react-router-dom";
import Assignment3 from "./a3";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function Labs() {
    return (
        <div>
            <Nav />
            <div className="container">
                <Assignment3 />
            </div>
            {/* <h1>Labs</h1>
            <Routes>
                <Route path="/a3" element={<Assignment3 />} />
            </Routes> */}
        </div>
    );
}

export default Labs;