import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';
import AddSpinner from '../../Hooks/AddSpinner/AddSpinner';
import { toast } from 'react-toastify';
const Login = () => {
  const [generalUser] = useAuthState(auth)
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
       
        
    }
    if(loading|| googleLoading|| sending){
      return <AddSpinner></AddSpinner>
    }
    if(error){
      return toast('Please put a valid email and password')
    }
    if(user){
      
      const url='https://obscure-spire-96407.herokuapp.com/login'
      fetch(url, {
  method: 'POST',
  body: JSON.stringify({
   email: email 
   
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) =>{
    localStorage.setItem('token', data.token)
    navigate(from, { replace: true })
  } );
  
    }

    if(googleUser){
      const googleEmail=generalUser.email
      const url='https://obscure-spire-96407.herokuapp.com/login'
      fetch(url, {
  method: 'POST',
  body: JSON.stringify({
   email: googleEmail
   
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) =>{
    localStorage.setItem('token', data.token)
    navigate(from, { replace: true })
  } );
  
    }

    const handleResetPassword=async()=>{
      
      await sendPasswordResetEmail(generalUser.email);
      
          toast('Sent email')
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