import React, { useState, useEffect } from "react";
import  style from "./body.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Vocabulary from "../vocabulary/vocabulary";
import Card from "../card_gallery/Card";
import words from '../words.json';


export default function Body() {
  const [count,setCount]=useState(0)


  
  function handlePrev(){
      if (count - 1 < words.length){setCount(0)} else {setCount(count-1)}
  }
    function handleNext(){
      if (count + 1 === words.length){setCount(0)} else {setCount(count+1)}
  }

  return (
    <div class={style.container}>
      <Header />
      <div class={style.slider} key= {count}>
        <div >  <button onClick={handlePrev} class={style.button}>prev</button>
</div>

  <div className="card ">   <Card  words = {words[count]} />
</div>
  <div >  <button onClick={handleNext} class={style.button} >next</button>
</div>
  </div>
      <Vocabulary />
      <Footer />
    </div>
  );
}
