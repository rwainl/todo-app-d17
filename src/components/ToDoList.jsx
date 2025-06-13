import React from "react";
import { useState } from "react";
import ToDoItem from "./ToDoItem";
import { AnimatePresence } from "framer-motion";

function ToDoList({ list, onStatus, onDelete, onEdit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchList = list.filter((item) =>
    item.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="border max-w-xl mx-auto py-4 px-6 my-6 rounded-xl">
        <p className="text-2xl font-bold text-center">To Do List</p>
        <input
          type="text"
          placeholder="Cari Todo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white border rounded-lg pl-2 pr-2 w-full my-2 mb-4 text-black"
        />
        <AnimatePresence>
          {searchList.map((item) => (
            <div className="">
              <ToDoItem
                item={item}
                itemid={item.id}
                onStatus={onStatus}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ToDoList;
