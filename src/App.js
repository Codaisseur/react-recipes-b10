import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import recipes from './fixtures/recipes'

class App extends Component {
  state = {
    recipes
  }

  updateRecipe(id, updates) {
    this.setState({
      recipes: this.state.recipes.map((recipe) => {
        if (recipe._id === id) return { ...recipe, ...updates }
        return recipe
      })
    })
  }

  render() {
    return (
      <div>
        <RecipesContainer
          updateRecipe={this.updateRecipe.bind(this)}
          recipes={ this.state.recipes } />
      </div>
    )
  }
}

export default App;
