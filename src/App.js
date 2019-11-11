import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Clima from "./components/clima";

const KEY = "e1a51d8ef4b2b569a4d850bb3bd271ff";

class App extends React.Component{
   state = {
     temperatura: undefined,
     cidade: undefined,
     pais: undefined,
     umidade: undefined,
     descricao: undefined,
     error: undefined
   }
  getClima = async (e) =>{
    e.preventDefault();
    const cidade = e.target.elements.cidade.value;
    const pais = e.target.elements.pais.value; 
    const chamada_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}uk&appid=${KEY}&units=metric`);
    const data = await chamada_api.json();
    if(cidade && pais){
      console.log(data);
      this.setState({
        temperatura: data.main.temp,
        cidade: data.name,
        pais: data.sys.country,
        umidade: data.main.humidity,
        descricao: data.weather[0].description,
        error: "" 
      });
    }else{
      this.setState({
        temperatura: undefined,
        cidade: undefined,
        pais: undefined,
        umidade: undefined,
        descricao: undefined,
        error: "Por favor entre com cidade e pais." 
      });
    }
  }
  render(){
    return(
      <div>
        <Title />
        <Form getClima={this.getClima}/>      
        <Clima 
          temperatura={this.state.temperatura}
          cidade={this.state.cidade}
          pais={this.state.pais}
          umidade={this.state.umidade}
          descricao={this.state.descricao}
          error={this.state.error}
        />
      </div>
    );
  }
};

export default App;