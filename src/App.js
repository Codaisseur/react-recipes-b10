import React, { Component } from 'react'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Loading />
        <LoadError />
        { this.props.children }
      </div>
    )
  }
}

export default App;
