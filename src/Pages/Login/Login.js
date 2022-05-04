import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth)
      let navigate = useNavigate();
      let location = useLocation();
      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    
      let from = location.state?.from?.pathname || "/";
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
        
    }
    if(user||googleUser){
        navigate(from, { replace: true })
    }
    return (
        <div className='row'>
            <div className='col-md-12'>
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
  </Button>
</Form>
            </div>
        </div>
    );
};

export default Login;