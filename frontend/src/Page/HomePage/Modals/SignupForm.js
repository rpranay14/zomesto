import { Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../../../Formik/FormikControl';
const signupSchema=Yup.object({
  name:Yup.string().required("Required"),
  email:Yup.string().email("Invalid email").required("Required"),
  password:Yup.string().min(8,"Password too short").required("Required"),
  confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password does not match").required("Required")
})

const SignupForm = ({setChangeModalState}) => {
  const initialValues={name:'',email:'',password:'',confirmPassword:""}
  
  const onSubmit=(values)=>{console.log(values)}
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={onSubmit}>
        {(formik)=>(
          <Form className="mt-4 flex justify-center">
              <div className="mt-10 flex flex-col w-[90%] ">
              <FormikControl placeHolder="Name" control="input" name="name" type="text"  label="Name" cstyle="border text-lg border-gray-400 w-[100%]  px-2 py-1"  />
              <FormikControl placeHolder="Email" control="input" type="email" name="email" label="Email" cstyle="mt-2 border text-lg border-gray-400 w-[100%]  px-2 py-1"/>
              <FormikControl placeHolder="Password" type="password" control="input" name="password" label="Password" cstyle="mt-2 border text-lg border-gray-400 w-[100%]  px-2 py-1"/>
              <FormikControl placeHolder="Confirm Password" type="password" control="input" name="confirmPassword" label="Confirm Password" cstyle="mt-2 border text-lg border-gray-400 w-[100%]  px-2 py-1"/>
              <button type='submit' className="mt-5 px-3 py-2 text-lg bg-red-500 text-white w-[100%] rounded-sm">Signup</button>
              </div>
          </Form>
         
        )}
      </Formik>
    </div>
  )
}

export default SignupForm