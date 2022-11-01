import React from 'react';
import style from './vocabulary.module.css'


export default function Vocabulary() {
    
    return(
<div class={style.block_table}>
            <ul class={style.table_number}>
                <li class={style.table_title_number}> # </li>
                <li class={style.row_number}>1</li>
                <li class={style.row_number}>2 </li>
                <li class={style.row_number}>3</li>
                <li class={style.row_number}>4 </li>
                <li class={style.row_number}>5 </li>
                <li class={style.row_number}>6 </li>
            </ul>
            <ul class={style.table}>
                <li class={style.table_title}>Слово</li>
                <li class={style.row}>1 столбец</li>
                <li class={style.row}>2 столбец</li>
                <li class={style.row}>3 столбец</li>
                <li class={style.row}>4 столбец</li>
                <li class={style.row}>5 столбец</li>
                <li class={style.row}>6 столбец</li>
            </ul>
            <ul class={style.table}>
                <li class={style.table_title}>Произношение</li>
                <li class={style.row}>1 столбец</li>
                <li class={style.row}>2 столбец</li>
                <li class={style.row}>3 столбец</li>
                <li class={style.row}>4 столбец</li>
                <li class={style.row}>5 столбец</li>
                <li class={style.row}>6 столбец</li>
            </ul>
         
            <ul class={style.table_delete}>
                <li class={style.table_title}></li>
                <li class={style.row}><button class={style.btn_delete}>X</button></li>
                <li class={style.row}><button class={style.btn_delete}>X</button></li>
                <li class={style.row}><button class={style.btn_delete}>X</button></li>
                <li class={style.row}><button class={style.btn_delete}>X</button></li>
                <li class={style.row}><button class={style.btn_delete}>X</button></li>
                <li class={style.row}><button class={style.btn_delete}>X</button></li>
            </ul>
            <ul class={style.table_delete}>
                <li class={style.table_title}></li>
                <li class={style.row}><button class={style.btn_save}>Save</button></li>
                <li class={style.row}><button class={style.btn_save}>Save</button></li>
                <li class={style.row}><button class={style.btn_save}>Save</button></li>
                <li class={style.row}><button class={style.btn_save}>Save</button></li>
                <li class={style.row}><button class={style.btn_save}>Save</button></li>
                <li class={style.row}><button class={style.btn_save}>Save</button></li>

            </ul>
</div>
    )
};

