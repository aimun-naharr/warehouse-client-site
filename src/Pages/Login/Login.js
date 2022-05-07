import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';
import AddSpinner from '../../Hooks/AddSpinner/AddSpinner';

const Login = () => {
  const [email, setEmail]=useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth)
      const [sendPasswordResetEmail, sending, passwordError] = useSendPasswordResetEmail(
        auth
      )
      let navigate = useNavigate();
      let location = useLocation();
      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    
      let from = location.state?.from?.pathname || "/";
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        setEmail(email)
        const password=e.target.password.value
        
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
        
    }
    if(loading|| googleLoading|| sending){
      return <AddSpinner></AddSpinner>
    }
    if(user||googleUser){
      const url='http://localhost:5000/login'
      fetch(url, {
  method: 'POST',
  body: JSON.stringify({
   email: user?.email ,
   googleEmail: googleUser?.email
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  console.log(user|| googleUser)
        navigate(from, { replace: true })

    }

    const handleResetPassword=async()=>{
      
      await sendPasswordResetEmail(email);
          alert('Sent email')
    }
    return (
        <div className='row'>
            <div className='col-md-12 mx-auto'>
            <Form onSubmit={handleLogin} className='w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name='password' type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Login
  </Button>
  <Button onClick={()=>signInWithGoogle()} variant="success">
    Google sign in
  </Button><br />
  <Button onClick={handleResetPassword} variant="link">Forgot password?</Button>
  <p className='mt-2'>New to bunch? <Link to='/signup'>Sign up</Link></p>
</Form>

            </div>
            
        </div>
    );
};

export default Login;