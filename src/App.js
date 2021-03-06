import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import { useState } from 'react';


function App() {
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day: 'Feb 5th at 2:30p.m.',
        reminder:true,
    },
    {
        id:2,
        text:'School Meeting',
        day: 'Feb 6th at 1:30p.m.',
        reminder:true,
    },
    {
        id:3,
        text:'Food Shopping',
        day: 'Feb 5th at 2:30p.m.',
        reminder:false,
    },
])

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  const addTask = (task)=>{
    const id = Math.floor(Math.random() *100000)+1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }

  const toggleReminder = (id)=>{
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
  }
  return (
    <div className='container'>
      <Header title="Task Tracker"/>
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:<h3>No tasks currently</h3>}
      <AddTask onAdd={addTask}/>
    </div>
  );
}

export default App;
