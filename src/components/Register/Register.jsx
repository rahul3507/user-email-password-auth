import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react'
import auth from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
  const[registerError, setRegisterError]=useState('');
  const [success,setSuccess]= useState('');
  const[showPassword, setShowPassword]= useState(false);
  const handleRegister= (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked
    console.log(email,password, accepted);
    if(password.length<6){
      setRegisterError("Password should be at least 6 characters or longer....");
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Your password should have at least one Upper Case...');
      return;
    }
    else if(!accepted){
      setRegisterError("Please accept our terms and conditions")
      return;
    }
    setRegisterError('');
    setSuccess('');
    createUserWithEmailAndPassword(auth,email, password)
    .then(result =>{
      console.log(result.user);
      setSuccess('User Created Successfully...')
      sendEmailVerification(result.user)
        .then(()=>{
          alert('Please check your email and verify your email')
        })
    })
    .catch((error) => {
      console.log(error)
      setRegisterError(error.message);
    });
  }
  return (
          <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form className='text-2xl flex flex-col gap-2.5 p-5' onSubmit={handleRegister}>
                    <label className="label">Name</label>
                    <input className='p-2 ' type="text" name='namr' placeholder='Enter your name' required id='' />

                    <label className="label">Email</label>
                    <input className='p-2 ' type="email" name='email' id=''  required/>

                    <label className="label">Password</label>
                    <div className='relative border justify-center'>
                      <input 
                            className='w-full p-2' 
                            type={showPassword? "text":"password" }
                            name='password'
                            id='' 
                            required
                            />
                    <span 
                        onClick={()=>setShowPassword(!showPassword)}
                        className='cursor-pointer absolute top-3 right-4 '
                        >
                          {
                            showPassword ? <FaEyeSlash/>:<FaEye /> 
                          }
                        </span>
                    </div>
                    <br />
                    <div className='flex '>
                      <input type="checkbox" name="terms" id="terms" />
                      <label htmlFor='terms'>Accept our <a href='#'>Terms and Conditions</a></label>
                    </div>
                    <br />
                    <button className="btn btn-neutral mt-4" type='submit'>Register</button>
                  </form>
                  {
                    registerError && <p className='text-red-400'>{registerError}</p>
                  }
                  {
                    success && <p className='text-green-400'>{success}</p>
                  }
                  <p>Already have and account? <Link to='/login' className='text-teal-400'>Login</Link></p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Register