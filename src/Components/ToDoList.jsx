import React, {useState} from 'react';
import ToDoTask from './ToDoTask';
import "../Styles/ToDoList.css";

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    function addTask () {
        const newTask = {id: Date.now(), text, completed: false};
        setTasks([...tasks, newTask]);
        setText("");
    }
    function deleteTask (id) {
        setTasks(tasks.filter((task) => task.id !== id ));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map((task) => {
            return task.id === id ? {...task, completed: !task.completed} : task;
        }));
    }

  return (
      <div className='Todo-List'>
          {tasks.map(task => {
              return <ToDoTask key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />; 
          })}
          <div className='Input-Fields'>
            <input type="text" placeholder="Enter A Task..." className="Task-Input" value={text} onChange={e => setText(e.target.value)} />
            <button className='Add-Button' onClick={() => addTask(text)}>Add</button>
          </div>
      </div>
  );
}

export default ToDoList;