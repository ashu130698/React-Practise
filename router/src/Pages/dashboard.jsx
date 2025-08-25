import { Link, Route, Routes } from "react-router-dom";
import Skills from "./skills";
import Qualification from "./Qualification";

function Dashboard() {
    return (
      <div className="container mt-3">
        <h3>Welcome to the dashbord</h3>

        <ul className="nav nav-tabs">
          
          <li className="nav-item">
            <Link className="nav-link" to="skills">
              My Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="qualification">
              Qualification
            </Link>
          </li>
          
        </ul>
        <Routes>
          <Route path="skills" element={<Skills />} />
          <Route path="qualification" element={<Qualification />} />
        </Routes>
      </div>
    );
}

export default Dashboard;