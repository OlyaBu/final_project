import React, {useState} from "react";
import style from './card.module.css';



export default function Card ({words}) {

  const{
        english,
        transcription,
        russian
       }= words;
       
       const [ pressed, setPressed] =useState(true);

       const  handleChange = () => {
         setPressed (!pressed)
         }

    return(
  
<div className={style.card}>  

            <h4 className={style.card_title}>{english}</h4>
            <div className={style.pronounce}>{transcription}</div>
            
 {pressed ? 
   <div className={style.divTranslate} onClick={handleChange}> проверь </div>
   : 
   <button className={style.button} onClick={handleChange}>{russian}</button>
 }
            </div>          

    )
}
