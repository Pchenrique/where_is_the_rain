import React from "react";
import img_night from '../img/night.svg';
import img_arrow_up from '../img/arrow-up.svg';
import img_arrow_down from '../img/arrow-down.svg';

class Clima extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-5 informations-form-left">
                        {this.props.cidade && this.props.pais && <h1 className="informations-city"> {this.props.cidade}</h1>}
                        <h6 className="informations-country">{this.props.pais}</h6>
                        <h6 className="informations-date">13/11/2019</h6>
                    </div>
                    <div className="col-md-5 informations-form-right">
                        <img src={img_night} className="img-weather-type"></img>
                        {this.props.descricao && <p className="description-weather-type">{this.props.descricao}</p>}

                        <div className="row">
                            <div className="col-xs-4 box-temperature-up">
                                <img src={img_arrow_down} className="img-arrow-down"></img>
                                {this.props.temp_min && <p className="information-minimum-temperature">{Math.trunc(this.props.temp_min)}º</p>}
                            </div>
                            <div className="col-xs-4 box-temperature-down">
                                <img src={img_arrow_up} className="img-arrow-up"></img>
                                {this.props.temp_max && <p className="information-maximum-temperature">{Math.trunc(this.props.temp_max)}º</p>}
                            </div>
                            <div className="col-xs-4 box-temperature">
                                {this.props.temperatura && <h1 className="temperature">{Math.trunc(this.props.temperatura)}ºC</h1>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 box-bottom-left">
                        <h6 className="box-bottom-titles">Detalhes</h6>
                        <hr></hr>
                        {this.props.pressao && <p className="information">Pressão Atmosférica: {this.props.pressao} hPa</p>}
                        {this.props.umidade && <p className="information">Umidade: {this.props.umidade}%</p>}
                        {this.props.nublado && <p className="information">Nublagem: {this.props.nublado}%</p>}

                    </div>
                    <div className="col-md-5 box-bottom-right">
                        <h6 className="box-bottom-titles">Vento</h6>
                        <hr></hr>
                        {this.props.velocidade_vento && <p className="information">Velocidade do vento: {this.props.velocidade_vento}m/s</p>}
                        {this.props.direcao_vento && <p className="information">Direção Vento: {this.props.direcao_vento}º</p>}
               
                    </div>
                </div>
                
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
};

export default Clima;