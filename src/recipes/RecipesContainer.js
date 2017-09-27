// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import SeedButton from './SeedButton'
import './RecipesContainer.css'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
  }

  renderRecipe(recipe, index) {
    return <RecipeItem
      key={index} { ...recipe } />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
          <SeedButton />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps)(RecipesContainer)
