import React from "react";
import '../styles/form.css';
import country from '../img/world-location.svg';
import city from '../img/placeholder-point.svg';

class Form extends React.Component {
    render() {
        return (
            <div className="row form">
                <form onSubmit={this.props.getClima} className="form-inline">
                    <div className="form-group mx-md-2">
                        <img src={city} className="img-world-location"/>
                        <input className="input-city" type="text" name="cidade" placeholder="cidade..." />
                    </div>
                    <div className="form-group mx-sm-3">
                        <img src={country} className="img-placeholder-point"/>
                        <input className="input-country" type="text" name="pais" placeholder="país..." />
                    </div>
                    <div className="btn-group">
                        <button>Clima</button>
                    </div>
                </form>
                {this.props.error && <p className="error">{this.props.error}</p>}
            </div>

        );
    }
};

export default Form;