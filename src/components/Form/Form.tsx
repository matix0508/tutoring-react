import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FormField, FormFieldProps } from "../FormField/FormField";
import styles from "./Form.module.scss";

type FormProps = {
    fields: FormFieldProps[]
    title: string
    onSubmit: (values: any) => void
}

export const Form: FC<FormProps> = ({fields, title, onSubmit}) => {
  const {register, handleSubmit} = useForm<any>();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
        <div className={styles.Form__title}>
            {title}
        </div>
        {fields.map((field, i) => (
        <FormField register={register} key={i} label={field.label} name={field.name} type={field.type}/>))}

      <button className={styles.Form__submit} type="submit">Submit</button>
    </form>
  );
};
