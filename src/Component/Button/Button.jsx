import React, { Component } from 'react';
import './Button.css'

const Buttons = props => {
    return ( 
            <button className='btn-gmail'>{props.value}</button>
        
     );
}
 
export default Buttons;