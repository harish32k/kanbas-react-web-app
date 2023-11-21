import { Navigate, Route, Routes } from "react-router-dom";
import Assignment3 from "./a3";
// import { Link } from "react-router-dom";
import Nav from "../Nav";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";
import Assignment5 from "./a5";


function Labs() {
    return (
        <div>
            <Nav />
            <Provider store={store} >
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Navigate to="a5" />} />
                        <Route path="/a3" element={<Assignment3 />} />
                        <Route path="/a4" element={<Assignment4 />} />
                        <Route path="/a5" element={<Assignment5 />} />
                    </Routes>
                </div>
            </Provider>
            {/* <h1>Labs</h1>
            <Routes>
                <Route path="/a3" element={<Assignment3 />} />
            </Routes> */}
        </div>
    );
}

export default Labs;