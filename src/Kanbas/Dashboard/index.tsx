import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses as initialCourses } from "../Database";

function Dashboard() {
  const [courses, setCourses] = useState(initialCourses);
  const [course, setCourse] = useState({
    _id: "0",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    image: "/images/reactjs.jpg"
  });

  const addNewCourse = () => {
    if (course._id === "0") { // Adding a new course
      const newCourse = {
        ...course,
        _id: new Date().getTime().toString()
      };
      setCourses([...courses, newCourse]);
    } else { // Updating an existing course
      setCourses(courses.map(c => c._id === course._id ? course : c));
    }
    // Reset the form
    setCourse({
      _id: "0",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      image: "/images/reactjs.jpg"
    });
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter(course => course._id !== courseId));
  };

  const editCourse = (c: typeof course) => {
    setCourse(c);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: value
    }));
  };

  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div>
        <h5>Course</h5>
        <input
          name="name"
          value={course.name}
          className="form-control"
          placeholder="Name"
          onChange={handleInputChange}
        />
        <input
          name="number"
          value={course.number}
          className="form-control"
          placeholder="Number"
          onChange={handleInputChange}
        />
        <input
          name="startDate"
          value={course.startDate}
          type="date"
          className="form-control"
          onChange={handleInputChange}
        />
        <input
          name="endDate"
          value={course.endDate}
          type="date"
          className="form-control"
          onChange={handleInputChange}
        />
        <button className="btn btn-success mt-2" onClick={addNewCourse}>
          {course._id === "0" ? "Add New Course" : "Update Course"}
        </button>
      </div>
      <div className="row mt-4">
        {courses.map((c) => (
          <div key={c._id} className="col" style={{ width: "300px" }}>
            <div className="card">
              {c.image.startsWith('#') ? (
                <div className="card-img-top" style={{ height: 150, backgroundColor: c.image }}></div>
              ) : (
                <img src={c.image} alt={c.name} className="card-img-top" style={{ height: 150 }} />
              )}
              <div className="card-body">
                <Link
                  className="card-title"
                  to={`/Kanbas/Courses/${c._id}/Home`}
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  {c.name}
                </Link>
                <p className="card-text">{c.name}</p>
                <div className="d-flex justify-content-between">
                  <button onClick={() => editCourse(c)} className="btn btn-warning">
                    Edit
                  </button>
                  <button onClick={() => deleteCourse(c._id)} className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
