import React, { FC } from "react";
import styles from "./FormField.module.scss";

export type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  register?: any;
};

export const FormField: FC<FormFieldProps> = ({ label, type, register, name }) => {
  return (
    <div className={styles.FormField}>
      <label className={styles.FormField__label}>{label}</label>
      <input {...register(name)} className={styles.FormField__input} type={type} />
    </div>
  );
};
