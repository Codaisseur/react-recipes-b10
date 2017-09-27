import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import seedRecipes from '../actions/recipes/seed'

class SeedButton extends PureComponent {
  render() {
    const { hide, onClick } = this.props

    if (hide) return null

    return (
      <button onClick={onClick}>Seed Recipes</button>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({
  hide: recipes.length > 0
})
const mapDispatchToProps = { onClick: seedRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(SeedButton)
