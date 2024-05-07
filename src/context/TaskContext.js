import { createContext, useLayoutEffect, useState } from "react";

export const TaskContext = createContext(
  {
    tasks_ar: [{ name: '', id: 1 }],
    currentEdit: {name:"" , id:0},
    showEdit: false,
    showEditPopUp: () => {},
    hideEditPopUp: () => {},
    addTask: (item) => {},
    removeTask: (id) => {},
    editTask: (id, item) => {}
  }
);


export function TaskContextProvider({ children }) {
  const [tasks_ar, setTasksAr] = useState([
    { name: 'Study for a test', id: 1 },
    { name: 'Clean the house', id: 2 }
  ])

  const [showEdit , setShowEdit] = useState(false)
  const [currentEdit , setCurrentEdit] = useState({name:"" , id:0})

  useLayoutEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTasksAr(JSON.parse(localStorage.getItem("tasks")))
    }
  }, [])

  const addTask = (item) => {
    setTasksAr((ar) => saveToLocal([...ar, item]))
  }

  const editTask = (id,item) =>{
    console.log(id, item);
    const taskIndex = tasks_ar.findIndex(item => item.id === id);
    const update_ar = [...tasks_ar]
    update_ar[taskIndex] = item
    setTasksAr(saveToLocal(update_ar));
  }

  const removeTask = (id) => {
    setTasksAr((ar) => saveToLocal(ar.filter(item => item.id !== id)))
  }

  const saveToLocal = (newTask_ar) => {
    localStorage.setItem('tasks', JSON.stringify(newTask_ar))
    return newTask_ar
  }

  const showEditPopUp = (item) =>{
    setCurrentEdit(item)
    setShowEdit(true)
  }

  const hideEditPopUp = () =>{
    setShowEdit(false)
  }

  const val = {
    tasks_ar,
    currentEdit,
    addTask,
    removeTask,
    editTask,
    showEdit,
    showEditPopUp,
    hideEditPopUp
  }

  return (
    <TaskContext.Provider value={val}>
      {children}
    </TaskContext.Provider>
  )
}