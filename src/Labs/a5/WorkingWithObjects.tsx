import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_URL = `${process.env.REACT_APP_API_BASE}/a5/assignment`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button onClick={fetchAssignment}>Fetch Assignment</button>

      <h4>Modifying Properties</h4>
      <div>
        <a
          href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
          className="btn btn-primary mb-2"
        >
          Update Title
        </a>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) =>
              setAssignment({
                ...assignment,
                title: e.target.value,
              })
            }
            value={assignment.title}
          />
        </div>
        <div>
          <h4>Retrieving Objects</h4>
          <div className="d-grid gap-2">
            <a
              className="btn btn-outline-primary"
              href={`${process.env.REACT_APP_API_BASE}/a5/assignment`}
            >
              Get Assignment
            </a>
            <a
              className="btn btn-outline-primary"
              href={`${process.env.REACT_APP_API_BASE}/a5/module`}
            >
              Get Module
            </a>
          </div>

          <h4>Retrieving Properties</h4>
          <div className="d-grid gap-2">
            <a
              className="btn btn-outline-success"
              href={`${process.env.REACT_APP_API_BASE}/a5/assignment/title`}
            >
              Get Title
            </a>
            <a
              className="btn btn-outline-success"
              href={`${process.env.REACT_APP_API_BASE}/a5/module/name`}
            >
              Get Module Name
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkingWithObjects;
