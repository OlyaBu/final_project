import React, {useState} from "react";
import style from './card.module.css';

export default function Button(props){
    const [ pressed, setPressed] =useState(false);

  const  handleChange = () => {
    setPressed (!pressed)
    }


return(
    pressed ?

   <div className={style.divTranslate} onClick={handleChange}> проверь  </div>
   : 

   <button className={style.button} onClick={handleChange}>Перевод</button>
  
   )
}