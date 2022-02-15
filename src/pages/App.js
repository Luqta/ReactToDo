import react, { useState } from "react";
import Form from "../components/Form/index";
import Lista from "../components/Lista/index";
import style from './App.module.scss';

function App(){
	const [tarefas, setTarefas] = useState([])

	return(
		<div className={style.App}>
			<Form setTarefas={setTarefas}/>
			<Lista tarefas={tarefas}/>
		</div>
	);
}

export default App;
