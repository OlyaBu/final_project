
import React, { useState} from "react";
import style from './pagecard.module.css'
import Card from "../../components/Card/Card";
import words from './words.json';

export default function PageCard(){
    const [count,setCount]=useState(0)

    function handlePrev(){
        if (count - 1 < words.length){setCount(0)} else {setCount(count-1)}
    }
      function handleNext(){
        if (count + 1 === words.length){setCount(0)} else {setCount(count+1)}
    }
     
 return(

    <div class={style.slider} key= {count}>
    <div ><button onClick={handlePrev} class={style.button}>prev</button></div>
<div className="card"> 
  <Card  words = {words[count]} /></div>
<div ><button onClick={handleNext} class={style.button} >next</button></div>
</div>
 )
}