import React from 'react'

const TaskSystem = ({ tasks, inputValue, setInputValue, addTask, deleteTask }) => {
  return (
    <div className="task-section">
      <h1>قائمة مهامي</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="... اكتب مهمة جديدة" 
      />
      <button onClick={() => inputValue && addTask(inputValue)}>اضافة مهمة</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => deleteTask(index)} style={{marginRight: '10px', backgroundColor: 'red'}}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskSystem