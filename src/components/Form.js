import React from "react";

class Form extends React.Component{
    render(){
        return(
           <form onSubmit={this.props.getClima}>
               <input type="text" name="cidade" placeholder="cidade..." />
               <input type="text" name="pais" placeholder="pais..." />
               <button>Clima</button>
           </form>
        );
    }
};

export default Form;