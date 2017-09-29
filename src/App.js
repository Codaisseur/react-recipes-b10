import React, { Component } from 'react'
import Loading from './components/Loading'
import LoadError from './components/LoadError'
import RecipesContainer from './recipes/RecipesContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Loading />
        <LoadError />
        <RecipesContainer />
      </div>
    )
  }
}

export default App;
