import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

export default function TaskItem(props) {
    const { item } = props;
    const { removeTask, showEditPopUp } = useContext(TaskContext)
    return (
        <div className='border p-2 my-3 shadow-sm overflow-hidden'>
            {item.name}
            <button onClick={() => { removeTask(item.id) }} className='btn btn-danger float-end btn-sm'>X</button>
            <button onClick={() => { showEditPopUp(item) }} className='btn btn-info float-end me-2 btn-sm'>Edit</button>
        </div>
    )
}
