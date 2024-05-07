import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

import TasksList from './TasksList'
import FormTask from './FormTask'
import EditPopup from './EditPopup'

export default function AppTask() {
  const { showEdit } = useContext(TaskContext)

  return (
    <main>
      {showEdit && <EditPopup />}
      <div className='container'>
        <article>
          <FormTask />
          <TasksList />
          {/* <hr /> */}
        </article>
      </div>
    </main>
  )
}
