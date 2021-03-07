import Header from './components/Header';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import { useState, useEffect} from 'react';


function App() {
  const [tasks,setTasks] = useState([])
  const [showAddTask,setShowAddTask] = useState(false)

  const deleteTask = async(id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:"DELETE"})
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  useEffect(()=>{
    const getTasks = async()=>{
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  },[])

  const fetchTasks = async()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  const fetchTask = async(id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const addTask = async(task)=>{
    const res = await fetch('http://localhost:5000/tasks',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(task)
      }
    )
    const data = await res.json()
    setTasks([...tasks,data])
    // const id = Math.floor(Math.random() *100000)+1
    // const newTask = {id,...task}
    // setTasks([...tasks,newTask])
  }

  const toggleReminder = async(id)=>{
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,reminder:!taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(updTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:data.reminder}:task))
  }
  return (
    <Router>
      <div className='container'>
        <Header title="Task Tracker" onAdd={()=>setShowAddTask(!showAddTask)}/>
        
        <Route path='/' exact render={(props)=>(
          <>
            {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:<h3>No tasks currently</h3>}
            {showAddTask && <AddTask onAdd={addTask}/>}
          </>
        )}/>
        <Route path='/about' component={About} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
