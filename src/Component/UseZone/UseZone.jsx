// eslint-disable-next-line no-unused-vars
import React from 'react';
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'
const UseZone = () => {
    return (
        <div className='bg-body-tertiary py-2'>
            <h5>Q-Zone</h5>
            <div>
               <img src={Qzone1} alt="" />
               <img src={Qzone2} alt="" />
               <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default UseZone;