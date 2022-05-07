import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';
import AddSpinner from '../../Hooks/AddSpinner/AddSpinner';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true})
      let navigate = useNavigate();
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";
      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        
        createUserWithEmailAndPassword(email, password)
        console.log(email, password)
        
    }
    if(user|| googleUser){
        navigate(from, { replace: true })
    }
    if(loading|| googleLoading){
        return <AddSpinner></AddSpinner>
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
Sign up
</Button>
<Button onClick={()=>signInWithGoogle()} variant="success">
Google sign in
</Button>
<p className='mt-2'>Already registered? <Link to='/login'>Log in</Link></p>
</Form>
        </div>
    </div>
    );
};

export default SignUp;