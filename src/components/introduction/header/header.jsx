import React from "react";
import styles from "./header.module.css"
import * as className from 'classnames';



export default function Header () {
    
    return(
<div className={styles.header}>   
<div className={styles.navigation}>
<div className={styles.about} to='/'> О словаре </div>
<div className={styles.about} to='/vocabulary'>Словарь</div>
<div className={styles.about} to='/card'>Карточки</div>
</div>
 
 </div>  
    )
};
