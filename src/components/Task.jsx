import '../styles/Task.css'
import { AiOutlineCloseCircle} from 'react-icons/ai'

function Task({id, text , complete, completeTask, deleteTask}){
	return(
		<div className={complete ? 'task-container complete' : 'task-container'}>
			<div className="task-text" onClick={() => completeTask(id)}>
				{console.log(text)}
				{text
				}					
			</div>
			<div className="task-icon-container">
				<AiOutlineCloseCircle className='task-icon' onClick={() => deleteTask(id)}/>
			</div>
		</div>
	)

}

export default Task;