import React, { useState } from "react";
import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  type Lesson = {
    name: any;
  };

  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="module-list">
      <div className="assignments-options">
        <button type="button" className="btn btn-light modules-buttons">
          Collapse All
        </button>
        <button type="button" className="btn btn-light modules-buttons">
          View Progress
        </button>
        <button className="btn btn-light dropdown-toggle modules-buttons">
          Publish All
        </button>
        <button type="button" className="btn btn-light modules-buttons">
          <FaEllipsisV className="me-2" />
        </button>

        <div className="">
        <input
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <button
          className="btn btn-danger modules-buttons"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          className="btn btn-danger modules-buttons"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
        </div>
      </div>{" "}
      <ul className="list-group wd-modules">
        {modulesList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div className="module-modifiers">
                <button
                  type="button"
                  className="module-mod-btn btn-delete"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  <FaTrash className="me-2" />
                  Delete
                </button>
                <button
                  type="button"
                  className="module-mod-btn btn-edit"
                  onClick={() => dispatch(setModule(module))}
                >
                  <FaEdit className="me-2" />
                  Edit
                </button>
              </div>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map(
                    (lesson: Lesson, index: React.Key | null | undefined) => (
                      <li className="list-group-item" key={index}>
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
