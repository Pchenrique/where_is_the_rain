import React from "react";
import image_left from '../img/rain.svg';
import logoText from '../img/logo1.svg';
import clouds from '../img/clouds.svg';
import '../App.css';

class Title extends React.Component{
    render(){
        return(
            <div>
                <img src={clouds} className="clouds1"/>
                <img src={clouds} className="clouds2"/>
                <img src={logoText} className="logoText"/>
                <img src={image_left} className="logoImg"/>
            </div>
        );
    }
};

export default Title;