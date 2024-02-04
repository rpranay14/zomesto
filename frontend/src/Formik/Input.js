import { ErrorMessage, Field } from 'formik';
import React from 'react'

const Input = (props) => {
    const {name,label,cstyle,placeholder,type,...rest}=props;
  return (
    <div>
         <Field type={type}  placeholder={placeholder} name={name} className={cstyle} {...rest}/>
         <ErrorMessage component="div" name={name} className="text-red-500 "></ErrorMessage>
    </div>
  )
}

export default Input