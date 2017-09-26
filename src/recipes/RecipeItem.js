// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import veganIcon from '../images/vegan.svg'
import vegetarianIcon from '../images/vegetarian.svg'
import pescatarianIcon from '../images/pescatarian.svg'
import LikeButton from '../components/LikeButton'

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><img src={veganIcon} alt="vegan" /></li> }
            { !vegan && vegetarian && <li><img src={vegetarianIcon} alt="vegetarian" /></li> }
            { pescatarian && <li><img src={pescatarianIcon} alt="pescatarian" /></li> }
          </ul>
          <LikeButton />
        </div>
      </article>
    )
  }
}

export default RecipeItem
