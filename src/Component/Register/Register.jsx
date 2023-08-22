// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from '../NavBar/NavBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const {createAccount}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleCreateAccound=(event)=>{
       event.preventDefault();
       const name=event.target.name.value;
       const photo=event.target.photo.value;
         const email=event.target.email.value;
         const password=event.target.password.value;
         console.log(email,password,name,photo)
         createAccount(email,password)
         .then((result)=>{
          const user = result.user;
          console.log(user)
          navigate('/')
         })
         .catch((error)=>{
          console.log(error.message)
         })
  }
    return (
        <Container>
             <Navbar></Navbar>
            <h2 className='text-center'>Register your account</h2>
            <hr className='border border-1 border-secondary mx-auto w-50' />
  <div className='mt-4'>
  <Form className='mx-auto w-50' onSubmit={handleCreateAccound}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Your Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter Your Photo Url" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
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
      Register
      </Button>
    </Form>
  </div>
        </Container>
    );
};

export default Register;