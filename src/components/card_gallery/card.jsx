import React, {useState} from "react";
import style from './card.module.css';
import Button from "./Button";

export default function Card (props) {


    let {id,
        pronounce,
        meaning,
       }=props;

    return(
        <div className={style.card_holder}>
<div className={style.card}>  
            <h4 className={style.card_title}>{id} check</h4>
            <div className={style.pronounce}>{pronounce}CHek</div>
   <Button/>
            </div>
            </div>

    )
}
