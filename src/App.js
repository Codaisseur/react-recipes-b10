import React, { Component } from 'react'
import Loading from './components/Loading'
import RecipesContainer from './recipes/RecipesContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Loading />
        <RecipesContainer />
      </div>
    )
  }
}

export default App;
