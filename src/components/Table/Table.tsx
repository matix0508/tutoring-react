import React, { FC } from 'react'
import styles from "./Table.module.scss";




type TableProps = {
    data: [],
    columns: []
}


export const Table:FC<TableProps> = () => {
  return (
    <table className={styles.Table}>
        <thead>
            <tr className={styles.Table__head}>
                <th className={styles.Table__head__col}>Col1</th>
                <th className={styles.Table__head__col}>Col1</th>
                <th className={styles.Table__head__col}>Col1</th>
            </tr>
        </thead>
        <tbody className={styles.Table__body}>
            <tr className={styles.Table__body__row}>
                <td className={styles.Table__body__row__col}>Siema</td>
                <td className={styles.Table__body__row__col}>Siema</td>
                <td className={styles.Table__body__row__col}>Siema</td>
            </tr>
            <tr className={styles.Table__body__row}>
                <td className={styles.Table__body__row__col}>Siema</td>
                <td className={styles.Table__body__row__col}>Siema</td>
                <td className={styles.Table__body__row__col}>Siema</td>
            </tr>
            <tr className={styles.Table__body__row}>
                <td className={styles.Table__body__row__col}>Siema</td>
                <td className={styles.Table__body__row__col}>Siema</td>
                <td className={styles.Table__body__row__col}>Siema</td>
            </tr>

        </tbody>
    </table>
  )
}
