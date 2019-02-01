import React, { Component } from 'react';
import ButtonHeader from '../Button/ButtonHeader'
import './Header.css';

class Header extends Component {    
    render() { 
        return ( 
            <div className="Header" style={{padding:"10px"}}>
              <div className="space">
                <ButtonHeader value="Gmail" />
              </div>
              <div className="space">
              <ButtonHeader value="Image" />
              </div>
               <img className="button-icon" src={require('../../Asset/Icon/kotak.png')} />
               <img className="button-icon" src={require('../../Asset/Icon/lonceng.png')} />
               <img className="button-icon" src={require('../../Asset/Icon/profile.PNG')} />
            </div>
         );
    }
}
 
export default Header;
