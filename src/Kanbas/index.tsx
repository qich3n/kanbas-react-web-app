import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Assignments from "./Courses/Assignments";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
{/*         <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1> */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Assignments" element={<Assignments/>} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          
        </Routes>
      </div>
    </div>
  );
}


export default Kanbas