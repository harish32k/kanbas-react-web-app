import EncodingParametersInURLs from "./EncodingParametersInURLs";
import SimpleAPIExamples from "./SimpleAPIExamples";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    //const API_BASE = "https://kanbas-node-server-app-6ntb.onrender.com";
    const API_BASE = process.env.REACT_APP_API_BASE;
    //console.log("Here " + API_BASE);
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${API_BASE}/a5/welcome`}
                    className="list-group-item">
                    Welcome
                </a>
            </div>
            <SimpleAPIExamples />
            <EncodingParametersInURLs/>
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>
    );
}
export default Assignment5;