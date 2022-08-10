import { useState } from "react";
import TaskForm from "./TaskForm";
import '../styles/TaskList.css'
import Task from "./Task";


function TaskList(){

	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		console.log(task);
		if(task.text.trim()){
			task.text = task.text.trim();

			const updateTasks= [task, ...tasks];
			setTasks(updateTasks);
		}
		console.log(tasks);
	};

	const deleteTask = (id) =>{
		const updateTasks= tasks.filter(task => task.id !== id);
		setTasks(updateTasks);
	};

	const completeTask = (id) =>{
		const updateTasks= tasks.map(task => {
			if(task.id === id){
				task.complete = !task.complete;
			}
			return task;
		});
		setTasks(updateTasks);
	};

	return(
		<>
			<TaskForm onSubmit={addTask}/>
			<div className="task-list-container">
				{
					tasks.map((task) => 
						<Task 
						key={task.id}
						id={task.id}
						text={task.text}
						complete={task.complete}
						deleteTask={deleteTask}
						completeTask={completeTask}
						/>
					

					)
				}
			</div>
		</>
	)
}

export default TaskList;