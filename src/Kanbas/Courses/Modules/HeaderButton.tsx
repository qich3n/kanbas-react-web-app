import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
function HeaderButtons() {
    return (
        <div className="wd-heading-buttons">
        <button id="normal-button">Collapse All</button>
        <button id="normal-button">View Progress</button>
        <button id="normal-button"> Publish All</button>
        <button id="add-button">+ Module</button>
        <button id="normal-button"><FaEllipsisV/></button>
        <hr></hr>
    </div>
    );
}
export default HeaderButtons;