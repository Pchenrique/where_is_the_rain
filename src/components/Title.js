import React from "react";
import image_left from '../img/cloudy.svg';
import '../App.css';

class Title extends React.Component{
    render(){
        return(
            <div>
                <h1 className="title">Where is the rain?</h1>
                <img src={image_left}/>
            </div>
        );
    }
};

export default Title;