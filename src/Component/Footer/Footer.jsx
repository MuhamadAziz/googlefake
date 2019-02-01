import React from 'react';
import './Footer.css';

const Footer = () => {
  return ( 
    <div className="container-footer">
      <div className="footerBar">
        <div className="footerBarRow">
          <div className="footerColumnLeft">
            <div classname="item" style={{paddingLeft:16}}>
              Indonesia
            </div>
          </div>
        </div>
        <div className="footerBarRow">
          <div className="footerColumnLeft">
            <div className ="item">
              Advertising
            </div>
            <div className ="item">
              Business
            </div>
            <div className ="item">
              About
            </div>
          </div>
          <div className="footerColumnRight">
            <div className ="item">
              Privacy
            </div>
            <div className ="item">
              Terms
            </div>
            <div className ="item">
              Setting
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;