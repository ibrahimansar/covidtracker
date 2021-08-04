import React from 'react'
import style from './Table.module.css'
import { prettyPrint } from '../LeftSideContainer/util'
export default function Table({tableData}) {
    return (
        <div className={style.table}>
            {
                tableData.map(({country,cases})=>(
                    <tr>
                        <td>{country}</td>
                        <td><strong>{prettyPrint(cases)}</strong></td>
                    </tr>
                ))
            }
        </div>
    )
}
