// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories,setCatagories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data =>setCatagories(data))
        .catch(error => console.log(error.message))
    },[])
    return (
        <div>
           <h4>All Caterogy</h4> 
           <div className='ps-3'>
           {
                 catagories.map(catagorie => <p key={catagorie.id}>
                  <Link to={`/category/${catagorie.id}`} className='btn fw-bold'>{catagorie.name}</Link>
                 </p>)
           }
           </div>
        </div>
    );
};

export default LeftNav;