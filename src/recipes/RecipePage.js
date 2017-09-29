import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/recipes/fetch'
import subscribeToRecipesService from '../actions/recipes/subscribe'
import Title from '../components/Title'

export class RecipePage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchRecipes()
    this.props.subscribeToRecipesService()
  }

  render() {
    const { title } = this.props

    if (!title) return null

    return(
      <div className="recipe page">
        <Title content={ title } />
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }, { params }) => {
  const recipe = recipes.reduce((prev, next) => {
    if (next._id === params.recipeId) {
      return next
    }
    return prev
  }, {})

  return {
    ...recipe
  }
}
const mapDispatchToProps = { fetchRecipes, subscribeToRecipesService }

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)
