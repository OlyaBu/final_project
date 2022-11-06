import React from "react";
import styles from './body.module.css';
import Footer from '../footer/footer';
import Card from '../card/card';
import Vocabulary from "../vocabulary/vocabulary";

export default function Body () {
  
    return(
        <div className={styles.main} >
            <div className={styles.foto}>   
<h4 className={styles.animated}>Инструмент для запоминания слов</h4>

 </div> 
   <Card id='to do smth' pronounce='[tu tu]' meaning='делать что-то'/>
   <Vocabulary/>
<Footer/>
            </div>

    )
}

