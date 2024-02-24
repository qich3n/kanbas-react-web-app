import ModuleList from "../Modules/List";
import { FaFileExport, FaPlusCircle, FaHouseUser, FaChartBar, FaMicrophone, FaBell } from "react-icons/fa";

function Home() {
    return (
        <div className="wd-course-home-body wd-flex-row-container">
            <div className="wd-course-module-list">
                <ModuleList />
            </div>
            <div className="d-none d-xl-block wd-course-status-bar">
                <button id="normal-button"><FaFileExport/> Import Existing Content</button>
                <button id="normal-button"><FaPlusCircle/> Import From Commons</button>
                <button id="normal-button"><FaHouseUser/> Choose Home Page</button>
                <button id="normal-button"><FaChartBar/> View Course Stream</button>
                <button id="normal-button"><FaMicrophone/> New Announcement</button>
                <button id="normal-button"><FaChartBar/> New Analytics</button>
                <button id="normal-button"><FaBell/> View Course Notifications</button>
            </div>
        </div>
    );
}
export default Home;