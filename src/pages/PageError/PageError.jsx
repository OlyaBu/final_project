import React from "react";
import styles from './error.module.css'
import Img from './2.jpg'


export default function Error(){
    return(
        <div class={styles.main}>
<img src={Img} alt='wtf'/>
             <h1>Это Ошибка 404, не совершай ее </h1> </div>
    )
}