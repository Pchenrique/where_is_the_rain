import React from "react";

class Clima extends React.Component{
    render(){
        return(
            <div>
                {this.props.hora && <p>Horario: {this.props.hora}</p>}
                {this.props.cidade && this.props.pais && <p>Localização: {this.props.cidade},{this.props.pais}</p>}
                {this.props.temperatura && <p>Temperatura: {this.props.temperatura}</p>}
                {this.props.temp_max && <p>Temperatura maxima: {this.props.temp_max}</p>}
                {this.props.temp_min && <p>Temperatura minima: {this.props.temp_min}</p>}
                {this.props.umidade && <p>Umidade: {this.props.umidade}%</p>}
                {this.props.descricao && <p>Descrição: {this.props.descricao}</p>}
                {this.props.velocidade_vento && <p>Velocidade do vento: {this.props.velocidade_vento}m/s</p>}
                {this.props.error && <p>{this.props.error}</p>} 
            </div>
        );
    }
};

export default Clima;