import React, { useState } from "react";
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid'; 


/**
 * 
 * @param {*} props Função que é passado pelo componente pai (App.js) 
 * @returns Componente de formulário e suas funcionalidades
 */
export default function Form(props){
	const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")	

	/**
	 * 
	 * @param {*} evento Recebe os valores que o evento em que foi chamado passa para poder dar um prevent default logo em seguida 
	 */
	function submitTodo(evento){
		evento.preventDefault()

		props.setTarefas(
			tarefasAntigas => [
				...tarefasAntigas, 
				{
					titulo,
					descricao,
					id: uuidv4() 
				}
			]
		)	

		setTitulo("")
		setDescricao("")
	}
    return(
        <form className={style.Form} onSubmit={submitTodo}>
			<label>Título:
				<br/>
				<input 
					type="text" 
					placeholder="Insira aqui o título da nota"
					name='titulo' 
                    id='titulo' 
					value={titulo}
					onChange={evento => setTitulo(evento.target.value)} 
					required
				></input>
			</label>
			<br/>
			<label>Nota:
				<br/>
				<textarea 
					type="text" 
					name='descricao' 
                    id='descricao' 
					placeholder="Insira aqui informações a respeito da nota"
					value= {descricao}
					onChange={evento => setDescricao(evento.target.value)} 
					required
				>
				</textarea>
			</label>
			<br/>
			<button type="submit">Enviar</button>
		</form>
    )
}