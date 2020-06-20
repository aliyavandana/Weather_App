import React, { Component } from 'react';
import Title from './Components/Title'
import Weather from './Components/Weather'
import Form from './Components/Form'

const API_KEY = 'd1113df21c279b4e85ae71f987abc70c'

class App extends Component {
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather = async(e) => {
    e.preventDefault()
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
    const data=await api_call.json();
    console.log(data)
    if(city && country){
      if(data.cod==404){
        this.setState({
          error:'Please Give a Correct Input'
        })
      }else{
    this.setState({
       temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
humidity:data.main.humidity,
description:data.weather[0].description,
error:""
    })
  }
  }else{
    this.setState({
      error:'Please Give an Input'
    })
  }
    
  }
  render() {
    return (
      <div>
        <Title />
        <Form weather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}/>
      </div>
    )
  }
}



export default App;
