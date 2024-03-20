import ModuleList from "../Modules/List";
import { FaFileExport, FaPlusCircle, FaHouseUser, FaChartBar, FaMicrophone, FaBell } from "react-icons/fa";
import "./index.css"; 

function Home() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-lg-9">
            <ModuleList />
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="wd-course-status-bar">
          <button className="normal-button"><FaFileExport/> Import Existing Content</button>
          <button className="normal-button"><FaPlusCircle/> Import From Commons</button>
          <button className="normal-button"><FaHouseUser/> Choose Home Page</button>
          <button className="normal-button"><FaChartBar/> View Course Stream</button>
          <button className="normal-button"><FaMicrophone/> New Announcement</button>
          <button className="normal-button"><FaChartBar/> New Analytics</button>
          <button className="normal-button"><FaBell/> View Course Notifications</button>
        </div>
      </div>
      </div>
      </div>
    );
  }
  
  export default Home;