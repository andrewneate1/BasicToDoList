import React from 'react'
import "../Styles/ToDoTask.css"

const ToDoTask = ({task, deleteTask, toggleCompleted}) => {

    const handleChange = () => {
        toggleCompleted(task.id);
    };

    console.log(task.text);

    return (
      <div className='Todo-Task'>
        <label className='Container'>
            <input className="Completed" type='checkbox' checked={task.completed} onChange={handleChange} />
        </label>
        <p className='Task-Text'>{task.text}</p>
        <button className='Delete-Button' onClick={() => deleteTask(task.id)}> Delete Task </button>
      </div>
    );
}

export default ToDoTask