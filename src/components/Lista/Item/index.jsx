import React from "react";
import style from './Item.module.scss';

/**
 * 
 * @param {*} props Parâmetro que traz as tarefas do componente pai (Lista) 
 * @returns Componente de item de cada lista da aplicação
 */
export default function Item(props){
    return(
        <li className={style.ListItem}> 
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
        </li> 
    )
}