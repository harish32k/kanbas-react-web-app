import "bootstrap/dist/css/bootstrap.min.css"
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Project from "./project";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/Labs" />} /> */}
          <Route path="/" element={<Navigate to="/project" />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>

  );
}
export default App;