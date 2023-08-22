// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
const NavBar = () => {
  const {user,logOut}=useContext(AuthContext)
const handelLogOut=()=>{
  logOut()
  .then(()=>{
    alert("success")
  })
  .catch((error)=>{
    console.log(error.message)
  })
}
  return (
    <Navbar className='mt-3' expand="lg" variant='light'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className='ps-2' to='/'>Home</Link>
            <Link className='ps-2' to='/'>About</Link>
            <Link className='ps-2' to='/' >Career</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
            </Nav.Link>
           {
             user ?
             <button onClick={handelLogOut} className='btn btn-outline-danger'>LogOut</button>:
             <Link to='/login'> <Button variant="outline-info">Login</Button></Link>
           
           }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;