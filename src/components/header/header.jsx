import React from "react";
import styles from './header.module.css';
import * as className from 'classnames';



export default function Header () {
    
    return(
<div className={styles.header}>   
<div className={styles.navigation}>
    <img></img> 
<div className="about"> О словаре </div>
<div className="instruction">Как пользоваться</div>
<div className="vocabulary">Словарь</div>
</div>
<div className={styles.foto}>   
<h4 className={styles.title}> Учить слова - просто!</h4>
<button className={styles.btn}> Добавить слова</button>
 </div>  
 </div>  
    )
};
