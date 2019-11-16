import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Clima from "./components/clima";

const KEY = "e1a51d8ef4b2b569a4d850bb3bd271ff";

class App extends React.Component {
  state = {
    icon: undefined,
    temperatura: undefined,
    temp_max: undefined,
    temp_min: undefined,
    cidade: undefined,
    pais: undefined,
    umidade: undefined,
    descricao: undefined,
    velocidade_vento: undefined,
    pressao: undefined,
    nublado: undefined,
    error: undefined
  }
  getClima = async (e) => {
    e.preventDefault();
    const cidade = e.target.elements.cidade.value;
    const pais = e.target.elements.pais.value;

    const chamada_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}uk&appid=${KEY}&units=metric`);
    const data = await chamada_api.json();

    if (data.cod === "404") {
      this.setState({
        icon: undefined,
        temperatura: undefined,
        temp_max: undefined,
        temp_min: undefined,
        cidade: undefined,
        pais: undefined,
        umidade: undefined,
        descricao: undefined,
        velocidade_vento: undefined,
        pressao: undefined,
        direcao_vento: undefined,
        nublado: undefined,
        error: "Por favor entre com cidade e pais validos."
      });
    } else if (cidade && pais) {
      console.log(data);
      this.setState({
        icon: data.weather[0].icon,
        temperatura: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        cidade: data.name,
        pais: data.sys.country,
        umidade: data.main.humidity,
        descricao: data.weather[0].description,
        velocidade_vento: data.wind.speed,
        pressao: data.main.sea_level,
        direcao_vento: data.wind.deg,
        nublado: data.clouds.all,
        error: ""
      });
    }
  }

  

  render() {
    return (
      <div className="container">
        <div className="row app">
          <div className="col-xs-12 col-sm-6 col-md-4 container-title">
            <Title />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 container-inputs">
            <Form getClima={this.getClima} error={this.state.error}/>

            <Clima
              icon={this.state.icon}
              temperatura={this.state.temperatura}
              temp_max={this.state.temp_max}
              temp_min={this.state.temp_min}
              cidade={this.state.cidade}
              pais={this.state.pais}
              umidade={this.state.umidade}
              descricao={this.state.descricao}
              velocidade_vento={this.state.velocidade_vento}
              pressao={this.state.pressao}
              direcao_vento={this.state.direcao_vento}
              nublado={this.state.nublado}
            />
          </div>
        </div>
      </div>
    );
  }

  
};

export default App;