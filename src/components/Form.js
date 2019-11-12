import React from "react";
import '../App.css'

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getClima}>
                    <input className="input-city" type="text" name="cidade" placeholder="cidade..." />
                    <input className="input-country" type="text" name="pais" placeholder="país..." />
                    <button>Clima</button>
                </form>
            </div>
        );
    }
};

export default Form;