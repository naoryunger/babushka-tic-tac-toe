import React, { useState } from "react";
import styled from "styled-components";

interface ToDoListProps {
  title?: string;
}

const Button = styled.button`
  background-color: #9f69d4;
  color: white;
  font-size: 16px;
  padding: 10px 60px;
  border-radius: 5px;
  border: 0px;
  margin: auto;
  cursor: pointer;
`;

const DEFAULT_TASKS = ["first", "second", "third", "forth"];

export function ToDoList({ title = "Website TO Do" }: ToDoListProps) {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  function addTask() {
    console.log("Task Added");
    const newTask = prompt("Add a task");
    if (!newTask) {
      alert("bad task");
      return;
    }

    console.log(newTask);
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <div className="ToDoHeader">
        <h3>{title}</h3>
      </div>
      <div className="ToDoList">
        <ul>
          {tasks.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>

        <Button onClick={addTask}>Add Task</Button>
      </div>
    </>
  );
}
