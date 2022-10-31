import React from "react";
import style from './card.module.css';


export default function Card (props) {
    const {title,discription,pronounce}= props;
    return(
        <div className={style.card_holder}>
<div className={style.card}>  
            <h4 className={style.card_title}>{title}to do something</h4>
            <div className={style.pronounce}>{pronounce}[tu duuu]</div>
            <p className={style.card_text}>{discription}это когда что-то происходит</p>
            </div>
            </div>

    )
}
