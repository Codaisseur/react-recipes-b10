// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import SeedButton from './SeedButton'
import RecipeEditor from './RecipeEditor'
import fetchRecipes from '../actions/recipes/fetch'
import './RecipesContainer.css'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchRecipes()
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

          <RecipeEditor
            photo="http://www.thechinawatch.com/wp-content/uploads/2012/03/11113.jpg" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })
const mapDispatchToProps = { fetchRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
