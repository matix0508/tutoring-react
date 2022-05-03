import React, { FC } from "react";
import styles from "./Table.module.scss";
import { useTable } from "react-table";

type TableProps = {
  data: any[];
  columns: any[];
};

export const Table: FC<TableProps> = ({ data, columns }) => {


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className={styles.Table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className={styles.Table__head}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className={styles.Table__head__col}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className={styles.Table__body}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={styles.Table__body__row}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className={styles.Table__body__row__col}>
                    {cell.render("Cell")}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};
