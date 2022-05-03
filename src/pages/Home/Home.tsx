import React from 'react'
import { Form } from '../../components/Form/Form';
import { FormFieldProps } from '../../components/FormField/FormField';
import styles from "./Home.module.scss";

const fields:FormFieldProps[] = [
    {
        label: 'Email',
        name: 'email',
        type: 'email'
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password'
    },
    {
        label: 'Repeat Password',
        name: 'repeatPassword',
        type: 'password'
    },
]

export const Home = () => {
  return (
    <div className={styles.Home}>
        <Form fields={fields} title={"New Lesson"} />
    </div>
  )
}
