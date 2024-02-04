import React from "react";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import FormikControl from "../../../Formik/FormikControl";
const LoginSchema=Yup.object({
  email:Yup.string().email("Invalid Email").required('Required'),
  password:Yup.string().min(8,"Password too short").required('Required')
})

const LoginForm = ({setChangeModalState}) => {
  const initialValues={email:'',password:""}
  const onSubmit=(values)=>{
  console.log("values",values)
  }
  
  return (
    <div>
   <Formik initialValues={initialValues} 
   onSubmit={onSubmit} 
   validationSchema={LoginSchema}>
    {(formik)=>(
      <Form className="mt-4 flex justify-center">
        <div className="mt-10 flex flex-col w-[90%] ">
          <FormikControl placeholder="Email" control="input" name="email" type="email" label="Email" className="border text-lg border-gray-400 w-[100%]  px-2 py-1"/>
          <FormikControl placeholder="Password" control="input" name="password" type="password" label="Password" className="mt-5 border text-lg  border-gray-400 w-[100%] px-2 py-1"/>
       
     <button disabled={formik.isSubmitting} type="submit" className="mt-5   px-3 py-2 text-lg bg-red-500 text-white w-[100%] rounded-sm">Login</button>
     <p className="text-lg mt-3  mb-7">New to Zomesto? <span onClick={()=>setChangeModalState()} className="text-red-500 cursor-pointer ">Create Account</span></p>
     </div>

      </Form>

    )}

   </Formik>
   </div>
  );
};

export default LoginForm;
