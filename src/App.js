import React,{Component} from 'react';
import Title from './Components/Title'
import Weather from './Components/Weather'
import Form from './Components/Form'

class App extends Component{
  render(){
    return(
      <div>
        <Title />
        <Weather />
        <Form />
      </div>
    )
  }
} 



export default App;
