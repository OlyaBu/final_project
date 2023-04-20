import React, {useState} from "react";
import style from './about.module.css';
import Img from'../PageAbout/1.png'





export default function About(){
 return(
   <div class={style.container}>
    <div class={style.about}> 
    <h3>Привет! Я инструмент для запоминания слов </h3>
    <h3>Hello! I am a tool for memorizing words
</h3>
 
<img src={Img} alt='this is top image'/>
</div>
    </div>
 )
}
