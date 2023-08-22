// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import NavBar from '../NavBar/NavBar';
const Header = () => {
    return (
        <div className='container'>
          <div className='text-center'>
          <img src={logo} alt="" />
           <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
           <p>{moment().format('dddd, MMMM D, YYYY')}</p>
          </div>
          <div className='d-flex bg-body-secondary p-3'>
          <Button variant="danger">Latest</Button>
          <Marquee speed={50} pauseOnHover>
  I can be a React component, multiple React components, or just some text... ,
  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
</Marquee>
          </div>
          <NavBar></NavBar>
        </div>
    );
};

export default Header;