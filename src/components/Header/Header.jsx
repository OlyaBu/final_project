import React from "react";
import styles from "./header.module.css"
import * as className from 'classnames';
import {
    Routes,
    Route,
    NavLink
  } from "react-router-dom";
  


export default function Header () {
    
    return(
<div className={styles.header}>   
<div className={styles.navigation}>
 <NavLink to='/about'><div className={styles.about} > О словаре </div></NavLink>
 <NavLink to='/vocabulary'><div className={styles.about} >Словарь</div></NavLink>
 <NavLink to='/card'><div className={styles.about}> Карточки </div></NavLink>
</div>
 
 </div>  
    )
};
