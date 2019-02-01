import React, { Component } from 'react';
import InputText from '../InputText/InputText.jsx';
import Buttons from '../Button/Button';


class Contents extends Component {    
    render() { 
        return ( 
            <div style={{paddingTop:'150px'}}>
                <img src={require("../../Asset/Icon/google.png")} alt="google"/>                
                <InputText />
                <div style={{display:'flex',padding: '24px',justifyContent:'center'}}>
                    <div style={{padding: '0px 10px'}}>
                        <Buttons value="Penelusuran Google" />
                    </div>
                    <div style={{padding: '0px 10px'}}>
                        <Buttons value="Saya Lagi Beruntung" />
                    </div>
                </div>
              
                

            </div>
         );
    }
}
 
export default Contents;