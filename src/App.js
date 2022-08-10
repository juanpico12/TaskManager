
import './App.css';
import logo from './images/logo.jpg'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="task-app">
      <div className='logo-contenedor'>
        <img 
          src={logo} 
            />
      </div>
      <div className='main-task-list'>
        <h1 >Mis tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
