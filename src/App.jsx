import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import FilterButton from "./components/FilterButton";
import Toast from "./components/Toast";
import useTodoList from "./hooks/TodoList";
import { useToast } from "./components/ToastContext";

function App() {
  const [filterMode, setFilterMode] = useState("Semua");
  const { showToast } = useToast();

  const {
    todoList,
    setTodoList,
    addHandler,
    statusHandler,
    editHandler,
    deleteHandler,
  } = useTodoList(showToast);

  const filteredList = todoList.filter((items) => {
    if (filterMode === "Selesai") return items.completed;
    if (filterMode === "Belum Selesai") return !items.completed;
    return true;
  });

  return (
    <>
        <div className="max-w-xl text-center my-6 mx-auto border rounded-lg py-2">
          <p className="text-4xl font-bold">To Do App</p>
        </div>
        <ToDoInput onAdd={addHandler} />
        <ToDoList
          list={filteredList}
          setTodoList={setTodoList}
          onStatus={statusHandler}
          onDelete={deleteHandler}
          onEdit={editHandler}
        />
        <FilterButton setFilter={setFilterMode} />
    </>
  );
}

export default App;
