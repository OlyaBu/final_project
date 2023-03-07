import React from "react";
import styles from "./header.module.css"
import * as className from 'classnames';



export default function Header () {
    
    return(
<div className={styles.header}>   
<div className={styles.navigation}>
<div className={styles.about} > О словаре </div>
<div className={styles.about} >Словарь</div>
<div className={styles.about}>Карточки</div>
</div>
 
 </div>  
    )
};
