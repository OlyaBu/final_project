import React, {useState} from "react";
import style from './card.module.css';


export default function Card (props) {
    const [pressed, setPressed] =useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    let {id,
        pronounce,
        meaning,
       }=props;
    return(
        <div className={style.card_holder}>
<div className={style.card}>  
            <h4 className={style.card_title}>{id}</h4>
            <div className={style.pronounce}>{pronounce}</div>
            <button className={style.button} onClick={handleChange}>{pressed ? "делать что-то": "Перевод"}  </button>
         
            </div>
            </div>

    )
}
