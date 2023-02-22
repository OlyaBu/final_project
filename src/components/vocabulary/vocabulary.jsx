import React, { useState } from 'react';
import style from './vocabulary.module.css';

export default function Vocabulary(props) {
    const {number,english,transcrition,translate}=props;
    const [isEdit, setisEdit] = useState (true);


 const GetEditUser= () => {
  setisEdit (!isEdit)
  }

    return(

<div class={style.block_table}>
<table>
  <tr>
    <th class={style.table_title_number}>#</th>
    <th class={style.table_title_number}> Слово</th>
    <th class={style.table_title_number}> Транскрипция </th>
    <th class={style.table_title_number}> Значение</th>
    <th class={style.table_title_number}>Управление</th>
  </tr>

  {isEdit ? (
  <tr>
    <td>{number}</td>
    <td>{english}</td>
    <td >{transcrition}</td>
    <td>{translate}</td>
    <td>   <button className={style.btn_write} onClick={GetEditUser}>Edit</button>
   <button className={style.btn_delete}>Del</button></td>
  </tr>
  )
  : (
  <tr>
<td><input type="text" defaultValue= {number}/></td>
  <td><input type="text" defaultValue= {english}/></td>
  <td> <input type="text" defaultValue={transcrition}/></td>
  <td><input type="text" defaultValue= {translate}/></td>
  <button className={style.btn_save} onClick={GetEditUser}> Save</button>
</tr>)
}
  </table>
  </div>
    )
};

