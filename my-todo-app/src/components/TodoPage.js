import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';

const TodoPage = () => {
  const navigate = useNavigate();

  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState('standard'); // standard, light, darker
  const [currentDateTime, setCurrentDateTime] = useState('');

  // --- Check Authentication and Fetch Data ---
  useEffect(() => {
    // Simple Auth check: if not authenticated, redirect to login
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      navigate('/');
      return;
    }

    getTodos();
    // Check if one theme has been set previously and apply it (or std theme if not found):
    let savedTheme = localStorage.getItem("savedTheme");
    savedTheme === null ? changeTheme("standard") : changeTheme(localStorage.getItem("savedTheme"));
  }, [navigate]);

  // --- Update DateTime ---
  useEffect(() => {
    const updateDateTime = () => {
      const dt = new Date();
      setCurrentDateTime(dt.toLocaleString());
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Functions adapted from JS
  const savelocal = (todoObj) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todoObj);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    setTodos(todos);
  };

  const updateLocalTodos = (todoItem) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todos.findIndex(
      (item) => item.text === todoItem.children[0].innerText
    );
    if (todoIndex !== -1) {
      todos[todoIndex].completed = todoItem.classList.contains("completed");
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const removeLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todos.findIndex(
      (item) => item.text === todo.children[0].innerText
    );
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    getTodos(); // Refresh the list
  };

  const changeTheme = (color) => {
    localStorage.setItem("savedTheme", color);
    setTheme(color);
    document.body.className = color;
    color === "darker"
      ? document.getElementById("title").classList.add("darker-title")
      : document.getElementById("title").classList.remove("darker-title");
    document.querySelector("input").className = `${color}-input`;
    document.querySelectorAll(".todo").forEach((todo) => {
      Array.from(todo.classList).some((item) => item === "completed")
        ? (todo.className = `todo ${color}-todo completed`)
        : (todo.className = `todo ${color}-todo`);
    });
    document.querySelectorAll("button").forEach((button) => {
      Array.from(button.classList).some((item) => {
        if (item === "check-btn") {
          button.className = `check-btn ${color}-button`;
        } else if (item === "delete-btn") {
          button.className = `delete-btn ${color}-button`;
        } else if (item === "todo-btn") {
          button.className = `todo-btn ${color}-button`;
        }
      });
    });
  };

  // --- Handlers ---

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoText = newTodoTitle.trim();
    if (todoText === "") {
      alert("You must write something!");
      return;
    }
    const todoObject = { text: todoText, completed: false };
    savelocal(todoObject);
    setTodos([...todos, todoObject]);
    setNewTodoTitle("");
  };

  const handleDeleteCheck = (event) => {
    const item = event.target;
    if (item.classList[0] === "delete-btn") {
      const todoDiv = item.parentElement;
      todoDiv.classList.add("fall");
      removeLocalTodos(todoDiv);
      todoDiv.addEventListener("transitionend", function () {
        todoDiv.remove();
      });
    }
    if (item.classList[0] === "check-btn") {
      const todoItem = item.parentElement;
      todoItem.classList.toggle("completed");
      // Find the corresponding todo item in local storage and update its completion status
      updateLocalTodos(todoItem);
    }
  };

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
  };

  return (
    <div className={theme}>
      <div className="flexrow-container" style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <div className="standard-theme theme-selector" onClick={() => handleThemeChange('standard')} />
        <div className="light-theme theme-selector" onClick={() => handleThemeChange('light')} />
        <div className="darker-theme theme-selector" onClick={() => handleThemeChange('darker')} />
      </div>
      <div id="header">
        <h1 id="title" className={theme === 'darker' ? 'darker-title' : ''}>
          Just do it.
          <div id="border" />
        </h1>
      </div>
      <div id="form">
        <form onSubmit={handleAddTodo}>
          <input
            className={`todo-input ${theme}-input`}
            type="text"
            placeholder="Add a task."
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            required
          />
          <button className={`todo-btn ${theme}-button`} type="submit">
            I Got This!
          </button>
        </form>
      </div>
      {/* div for top left corner */}
      <div className="version">
        <div className="demo version-section">
          <a
            href="https://github.com/lordwill1/todo-list"
            className="github-corner"
          >
            <svg
              width={80}
              height={80}
              viewBox="0 0 250 250"
              style={{
                fill: "#151513",
                color: "#fff",
                position: "absolute",
                top: 0,
                border: 0,
                left: 0,
                transform: "scale(-1, 1)"
              }}
            >
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
              <path
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="currentColor"
                style={{ transformOrigin: "130px 106px" }}
                className="octo-arm"
              />
              <path
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="currentColor"
                className="octo-body"
              />
            </svg>
          </a>
        </div>
        <div>
          <p>
            <span id="datetime">{currentDateTime}</span>
          </p>
        </div>
        <div id="myUnOrdList">
          <ul className="todo-list" onClick={handleDeleteCheck}>
            {todos.map((todo, index) => (
              <div className={`todo ${theme}-todo ${todo.completed ? 'completed' : ''}`} key={index}>
                <li className="todo-item">{todo.text}</li>
                <button className={`check-btn ${theme}-button`}>
                  <i className="fas fa-check"></i>
                </button>
                <button className={`delete-btn ${theme}-button`}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
