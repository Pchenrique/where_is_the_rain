import React from "react";
import img_arrow_up from '../img/arrow-up.svg';
import img_arrow_down from '../img/arrow-down.svg';

class Clima extends React.Component {
    gerarImg(icon) {
        return "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    }
    render() {
        return (
            <div>
                <div className="row informations">
                    <div className="col-md-5 informations-form-left">
                        {this.props.cidade && this.props.pais && <h1 className="informations-city"> {this.props.cidade}</h1>}
                        <h6 className="informations-country">{this.props.pais}</h6>
                        <h6 className="informations-date">{new Date(new Date().setHours(new Date().getHours())).getHours()}:{new Date(new Date().setMinutes(new Date().getMinutes())).getMinutes()}<br></br>
                            {new Date(new Date().setDate(new Date().getDate())).getDate()}/
                            {new Date(new Date().setMonth(new Date().getMonth() + 1)).getMonth()}/
                            {new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear()}
                        </h6>
                    </div>
                    <div className="col-md-5 informations-form-right">
                        <div className="row">
                            <img src={this.gerarImg(this.props.icon)} className="img-weather-type" />
                            {this.props.descricao && <p className="description-weather-type">{this.props.descricao}</p>}
                        </div>
                        <div className="row temp">
                            <div className="col-md-4 box-temperature-up">
                                <img src={img_arrow_down} className="img-arrow-down" />
                                {this.props.temp_min && <p className="information-minimum-temperature">{Math.trunc(this.props.temp_min)}º</p>}
                            </div>
                            <div className="col-md-4 box-temperature-down">
                                <img src={img_arrow_up} className="img-arrow-up" />
                                {this.props.temp_max && <p className="information-maximum-temperature">{Math.trunc(this.props.temp_max)}º</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 ml-5 box-temperature">
                                {this.props.temperatura && <h1 className="temperature">{Math.trunc(this.props.temperatura)}ºC</h1>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row boxes-bottom">
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
            </div>
        );
    }
};

export default Clima;