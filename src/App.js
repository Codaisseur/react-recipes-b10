import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import recipes from './fixtures/recipes'

class App extends Component {
  render() {
    return (
      <div>
        <RecipesContainer recipes={ recipes } />
      </div>
    )
  }
}

export default App;
