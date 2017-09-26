// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import './RecipesContainer.css'

class RecipesContainer extends PureComponent {
  static propTypes = {
    updateRecipe: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
  }

  renderRecipe(recipe, index) {
    return <RecipeItem
      onChange={this.props.updateRecipe}
      key={index} { ...recipe } />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

export default RecipesContainer
