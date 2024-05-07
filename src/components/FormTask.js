import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

export default function FormTask() {

  const { addTask } = useContext(TaskContext)

  const [nameInp, setNameInp] = useState("")
  const onSub = (e) => {
    e.preventDefault();
    if (nameInp.length > 1) {
      addTask({
        name: nameInp,
        id: Date.now()
      })
      setNameInp("")
    } else {
      alert('Enter Valid name of the task (min 2 chars)')
    }
  }

  return (
    <div>
      <h2>Form taks</h2>
      <form onSubmit={onSub} className='col-md-6'>
        <label>Task name:</label>
        <div className='d-flex'>
          <input onInput={(e) => setNameInp(e.target.value)} type="text"
            className='form-control' />
          <button className='btn btn-info'>Add</button>
        </div>
      </form>
    </div>
  )
}
