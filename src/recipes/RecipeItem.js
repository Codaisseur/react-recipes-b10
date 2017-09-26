// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'

class RecipeItem extends PureComponent {
  render() {
    const { title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><span role="img" aria-label="vegan">🌾</span></li> }
            { !vegan && vegetarian && <li><span role="img" aria-label="vegatarian">🥕</span></li> }
            { pescatarian && <li><span role="img" aria-label="pescatarian">🐟</span></li> }
          </ul>
        </div>
      </article>
    )
  }
}

export default RecipeItem
