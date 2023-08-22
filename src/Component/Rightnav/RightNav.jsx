// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { FaGoogle,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import UseZone from '../UseZone/UseZone';
import bg from '../../assets/bg1.png';
import './RightNav.css'
const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
            <div className='mt-3'>
                <h5>Find Us On</h5>
                <ListGroup>
      <ListGroup.Item><FaFacebook/>Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/>Twitter</ListGroup.Item>
     
    </ListGroup>
            </div>

            <div className='mt-4'>
        <UseZone></UseZone>
    </div>
{/* back ground */}
    <div className='position-relative mt-3'>
     <img src={bg} alt="" />
      <div className="position-absolute text-white">
        <h2>Create an Amazing Newspaper</h2>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
        </div>
    );
};

export default RightNav;