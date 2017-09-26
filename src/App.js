import React, { Component } from 'react'
import Title from './components/Title'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="All Recipes" />
        <Title content="A Spanish Omelette" />
      </div>
    );
  }
}

export default App;
