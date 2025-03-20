import React, { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState(""); // Uzdevuma nosaukuma ievade

  // ✅ Ielādējam uzdevumus no localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // ✅ Saglabājam uzdevumus localStorage, kad tie mainās
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // ✅ Funkcija uzdevuma pievienošanai
  const addTask = () => {
    if (!taskName.trim()) return; // Neļauj pievienot tukšu uzdevumu

    const newTask = { id: Date.now(), text: taskName };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskName(""); // Notīra input lauku pēc pievienošanas
  };

  return (
    <div>
      <h2>📝 Uzdevumu saraksts</h2>
      <input
        type="text"
        placeholder="Ievadi uzdevumu..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={addTask}>➕ Pievienot uzdevumu</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
