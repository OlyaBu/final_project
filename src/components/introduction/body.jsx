import React, { useState, useEffect } from "react";
import styles from "./body.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Vocabulary from "../vocabulary/vocabulary";
import Card from "../card_gallery/Card";
import words from '../words.json';
import fadeIn from 'react-animations/lib/fade-in'
import Radium, {StyleRoot} from 'radium';

export default function Body() {
  const [count,setCount]=useState(0)


  
  function handlePrev(){
      if (count - 1 < words.length){setCount(0)} else {setCount(count-1)}
  }
    function handleNext(){
      if (count + 1 === words.length){setCount(0)} else {setCount(count+1)}
  }

  return (
    <div className="container">
      <Header />
      <div className="slider" key= {count}>
  <button onClick={handlePrev} className="prev">prev</button>
      
  <Card  words = {words[count]} />

  <button onClick={handleNext} className="next">next</button>
  </div>
      <Vocabulary />
      <Footer />
    </div>
  );
}
