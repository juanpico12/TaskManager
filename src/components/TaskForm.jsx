import '../styles/TaskForm.css'
import { useState } from 'react'
import { v4 as uuidv4} from 'uuid';
import { AiFillPropertySafety } from 'react-icons/ai';

function TaskForm(props) {

	const [input, setInput] = useState('');

	const changeHandle = e =>{
		setInput(e.target.value)
	};

	const sentHandle = e => {
		e.preventDefault();
		console.log('Enviando formulario');
		const newTask = {
			id: uuidv4(),
			text: input,
			complete:false,
		}

		props.onSubmit(newTask);
	};
	return(
		<form className="task-form" onSubmit={sentHandle}>
			<input 
				className="task-input"
				type='text'
				placeholder="Escribe una tarea"
				name="text"
				onChange={changeHandle}
			/>
			<button className="task-button" >
			  Agregar Tarea
			</button>
		</form>
	)
}

export default TaskForm;