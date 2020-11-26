import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className='preloader__bg'>
            <div className='preloader'>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}

export default Preloader;