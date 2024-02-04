import React from 'react';
import { IoClose } from "react-icons/io5";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthenticationModal = ({modal,changeModalState}) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60'>
        <div className='fixed top-[35%] left-[40%] w-[20%] bg-white text-black rounded-md px-5 py-3'>
           <div className='flex items-center justify-between'>
            <p className='text-3xl'>{modal}</p>
            <IoClose  className='cursor-pointer w-5 h-5' onClick={()=>changeModalState('')}/>
           </div>
           {modal==="Login" ? <LoginForm setChangeModalState={()=>changeModalState('Signup')}/> : <SignupForm setChangeModalState={()=>changeModalState('Login')}/>}
        </div>
       
    </div>
  )
}

export default AuthenticationModal