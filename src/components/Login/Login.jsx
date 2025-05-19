import { sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth';
import auth from "../../firebase/firebase.config"
import React, { useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const[registerError, setRegisterError]=useState('');
    const [success,setSuccess]= useState('');
    const[showPassword, setShowPassword]= useState(false);

    const emailRef =useRef(null);
    
    const handleForgetPassword=()=>{
      const email = emailRef.current.value;
      if(!email){
        console.log('Please provide an email', emailRef.current.value);
        return;
      }
      else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        console.log('Please write a valid email');
        return;
      }
      sendPasswordResetEmail(auth,email)
        .then(()=>{
          alert('please check your email')
        })
        .catch(error=>{
          console.log(error.message)
        })
    }

    const handleLogin= (e) =>{
        e.preventDefault()
        const  email = e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password);

        setRegisterError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email,password)
              .then((result)=>{
                console.log(result.user)
                setSuccess('Sign in Successfully...')
              })
              .catch((error) => {
                  console.log(error)
                  setRegisterError(error.message);
      });
    }
  return (
    <div>
          <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form className="fieldset" onSubmit={handleLogin}>
                    <label className="label">Email</label>
                    <input
                        ref={emailRef}
                        type="email" 
                        name='email' 
                        className="input" 
                        placeholder="Email" 
                        />
                    <label className="label">Password</label>
                    <div className='relative border justify-center'>
                                            <input 
                                                  className='w-full p-2' 
                                                  type={showPassword? "text":"password" }
                                                  name='password'
                                                  id='' 
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
                    <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                  </form>
                   {
                    registerError && <p className='text-red-400'>{registerError}</p>
                  }
                  {
                    success && <p className='text-green-400'>{success}</p>
                  }
                  <p>New to this website? Please <Link to='/register' className='text-red-400'>Register</Link></p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Login