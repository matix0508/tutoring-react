import React, { FC } from "react";
import styles from "./FormField.module.scss";

export type FormFieldProps = {
  label: string;
  name: string;
  type: string;
};

export const FormField: FC<FormFieldProps> = ({ label, type }) => {
  return (
    <div className={styles.FormField}>
      <label className={styles.FormField__label}>{label}</label>
      <input className={styles.FormField__input} type={type} />
    </div>
  );
};
