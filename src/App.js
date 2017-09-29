import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Loading />
        <LoadError />
        { this.props.children }
      </div>
    )
  }
}

export default App;
