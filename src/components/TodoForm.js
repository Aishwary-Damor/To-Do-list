import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (task) {
          // add todo
          addTodo(task);
          // clear form after submission
          setTask('');
        }
      };
  return (
    
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="todo-input" placeholder='Enter the task . . .' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}