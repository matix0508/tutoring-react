import React, { FC } from "react";
import { FormField, FormFieldProps } from "../FormField/FormField";
import styles from "./Form.module.scss";

type FormProps = {
    fields: FormFieldProps[]
    title: string
}

export const Form: FC<FormProps> = ({fields, title}) => {
  return (
    <form className={styles.Form}>
        <div className={styles.Form__title}>
            {title}
        </div>
        {fields.map((field, i) => (
        <FormField key={i} label={field.label} name={field.name} type={field.type}/>))}

      <button className={styles.Form__submit} type="submit">Submit</button>
    </form>
  );
};
