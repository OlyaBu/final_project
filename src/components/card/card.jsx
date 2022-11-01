import React from "react";
import style from './card.module.css';


export default function Card () {
    return(
        <div className={style.card_holder}>
<div className={style.card}>  
            <h4 className={style.card_title}>to do something</h4>
            <div className={style.pronounce}>[tu duuu]</div>
            <p className={style.card_text}>это когда что-то происходит</p>
            </div>
            </div>

    )
}
