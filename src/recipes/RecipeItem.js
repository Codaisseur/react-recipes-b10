// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import veganIcon from '../images/vegan.svg'
import vegetarianIcon from '../images/vegetarian.svg'
import pescatarianIcon from '../images/pescatarian.svg'
import LikeButton from '../components/LikeButton'

class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    liked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  toggleLike() {
    const { _id, liked, onChange } = this.props
    onChange(_id, { liked: !liked })
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, liked } = this.props

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
          <LikeButton liked={liked} onChange={this.toggleLike.bind(this)} />
        </div>
      </article>
    )
  }
}

export default RecipeItem
