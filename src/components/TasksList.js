import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskItem from './TaskItem'

export default function TasksList() {

  const { tasks_ar } = useContext(TaskContext)

  return (
    <div className='mt-4'>
      <h2>List of tasks added</h2>
      <div className='col-8 mt-3'>
        <h2>
          {tasks_ar.map(item => {
            return (
              <TaskItem key={item.id} item={item} />
            )
          })}
        </h2>
      </div>
    </div>
  )
}
