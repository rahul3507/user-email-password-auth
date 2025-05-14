import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import auth from '../../firebase/firebase.config';

const Register = () => {
  const handleRegister= (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
    createUserWithEmailAndPassword(auth,email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error)
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
          <label className="label">Email</label>
          <input className='p-2 ' type="email" name='email' id='' />
          <label className="label">Password</label>
          <input className='p-2' type="password" name='password' id='' />
         
           <button className="btn btn-neutral mt-4" type='submit'>Register</button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register