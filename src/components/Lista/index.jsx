import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';

/**
 * 
 * @param {*} props Parâmetro que traz as tarefas do componente pai (App.js)
 * @returns Componente de lista utilizado no projeto
 */
export default function Lista(props){
    const tarefas = props.tarefas
    
    return(
        <ul className={style.Lista}>
            {
                tarefas.map(item => 
                    <Item 
                        titulo={item.titulo}
                        descricao={item.descricao}
                        key={item.id} 
                    /> 
                )
            }
        </ul> 
    )
}