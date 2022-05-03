import React from 'react'
import { Table } from '../../components/Table/Table';
import styles from "./Payments.module.scss";

export const Payments = () => {
  return (
    <div className={styles.Payments}>
        <Table />
    </div>
  )
}
