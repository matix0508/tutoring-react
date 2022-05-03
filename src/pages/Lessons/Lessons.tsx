import React from "react";
import { Table } from "../../components/Table/Table";
import styles from "./Lessons.module.scss";
const data = [
  {
    date: "2020-01-01",
    student: "Alicja",
    cost: "100",
  },
  {
    date: "2020-01-01",
    student: "Alicja",
    cost: "100",
  },
  {
    date: "2020-01-01",
    student: "Alicja",
    cost: "100",
  },
];
const columns = [
  {
    Header: 'Date',
    accessor: 'date'
  },
  {
    Header: 'Student',
    accessor: 'student'
  },
  {
    Header: 'Cost',
    accessor: 'cost'
  },
]

export const Lessons = () => {

  return (
    <div className={styles.Lessons}>
      <div className={styles.Lessons__table}>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};
