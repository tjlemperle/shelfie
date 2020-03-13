import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';

import Form from './Components/Form/Form';
import Header from './Components/Header/Header'

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [{
        name: 'shoes',
        price: 23,
        img: 'txt' 
      }, 
      {
        name:'shit',
        price: 8, 
        img: 'txt'
      }]
    }
  }

  render(){
  return (
    <div className="App">
      <Dashboard 
      inventory = {this.state.inventory}
      />         
      <Form />
      <Header />
    </div>
  );
  }
}

export default App;
