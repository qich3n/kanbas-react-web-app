import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const API = `${process.env.REACT_APP_API_BASE}/a5/todos`
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState<any[]>([]);
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo: any) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id: any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const updateTodo = async () => {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    };
    const deleteTodo = async (todo: any) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    };
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
      <div>
          <h3>Working with Arrays</h3>
          <ul className="list-group">
              {todos.map((todo) => (
                  <li key={todo.id} className="list-group-item">
                      <input checked={todo.completed}
                          type="checkbox" readOnly />
                      {todo.title}
                      <p>{todo.description}</p>
                      <p>{todo.due}</p>
                      <button className="btn btn-outline-primary mb-2" onClick={() => fetchTodoById(todo.id)} >
                          Edit
                      </button>
                      <button className="btn btn-outline-danger float-end ms-2" onClick={() => deleteTodo(todo)}>
                          Delete
                      </button>
                      {todo.title}
                  </li>
              ))}
          </ul>
          <button className="btn btn-outline-success mb-2 w-100" onClick={createTodo} >
              Create Todo
          </button>
          <h4>Retrieving Arrays</h4>
          <a className="btn btn-outline-info mb-2 w-100" href={API}>
              Get Todos
          </a>
          <h4>Retrieving an Item from an Array by ID</h4>
          <input value={todo.id}
              onChange={(e) => setTodo({
                  ...todo, id: parseInt(e.target.value)
              })} /> <br />
          <input type="text" value={todo.title}
              onChange={(e) => setTodo({
                  ...todo, title: e.target.value
              })} /> <br />
          <textarea value={todo.description}
              onChange={(e) => setTodo({
                  ...todo,
                  description: e.target.value
              })} /> <br />
          <input value={todo.due} type="date"
              onChange={(e) => setTodo({
                  ...todo, due: e.target.value
              })} /> <br />
          <label>
              <input value={todo.completed === true ? "true" : "false"} type="checkbox"
                  onChange={(e) => setTodo({
                      ...todo, completed: e.target.checked
                  })} />
              Completed
          </label> <br />
          <button className="btn btn-outline-secondary mb-2 w-100" onClick={postTodo}> Post Todo </button> <br />
          <button className="btn btn-outline-warning mb-2 w-100" onClick={updateTodo}>
              Update Todo
          </button>
          <button className="btn btn-outline-secondary mb-2 w-100" onClick={updateTitle} >
              Update Title
          </button>
           <br />
            <h3>Updating an Item in an Array</h3>
            <a className="btn btn-outline-primary mb-2 w-100 d-block" href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
    </a>
    <a className="btn btn-outline-success mb-2 w-100 d-block" href={`${API}/${todo.id}/completed/${todo.completed}`} >
        Complete Todo ID = {todo.id}
    </a>
    <a className="btn btn-outline-info mb-2 w-100 d-block" href={`${API}/${todo.id}/description/${todo.description}`} >
        Describe Todo ID = {todo.id}
    </a>
    <a className="btn btn-outline-secondary mb-2 w-100 d-block" href={`${API}/${todo.id}`}>
        Get Todo by ID
    </a>
    <h3>Filtering Array Items</h3>
    <a className="btn btn-outline-warning mb-2 w-100 d-block" href={`${API}?completed=true`}>
        Get Completed Todos
    </a>
    <h3>Creating new Items in an Array</h3>
    <a className="btn btn-outline-danger mb-2 w-100 d-block" href={`${API}/create`}>
        Create Todo
    </a>
    <h3>Deleting from an Array</h3>
    <a className="btn btn-outline-dark mb-2 w-100 d-block" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
    </a>
        </div>
    );
}
export default WorkingWithArrays;