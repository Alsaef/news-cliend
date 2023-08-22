// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from '../NavBar/NavBar'
import { Link, useNavigate,useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Provider/AuthProvider';
const LoginPage = () => {
  const {loginUser}=useContext(AuthContext)
  const navigate=useNavigate()
  let location = useLocation();
  const from=location.state?.from?.pathname||'/'
    const handelLogin=(event)=>{
      event.preventDefault();
      const email=event.target.email.value;
      const password=event.target.password.value;
      console.log(email,password)
      loginUser(email,password)
      .then((result)=>{
        const user = result.user;
        console.log(user)
        navigate(from,{replace:true})
       })
       .catch((error)=>{
        console.log(error.message)
       })
    }
    return (
        <Container>
            <Navbar></Navbar>
            <h2 className='text-center p-2'>Login your account</h2>
            <hr className='border border-1 border-secondary mx-auto w-50' />
               <div className='mt-4'>
     <Form className='mx-auto w-50' onSubmit={handelLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
               </div>
            <p className='text-center mt-2'>Do Not Have An Account ? <Link  className='text-danger' to='/register'><small>register</small></Link></p>
        </Container>
    );
};

export default LoginPage;