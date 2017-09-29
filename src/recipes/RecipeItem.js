// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import toggleLikeAction from '../actions/recipes/toggleLike'
import LikeButton from '../components/LikeButton'
import RecipeCategory from './RecipeCategory'
import { Link } from 'react-router'
import './RecipeItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

export class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    photo: PropTypes.string,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    liked: PropTypes.bool,
    toggleLikeAction: PropTypes.func.isRequired,
  }

  toggleLike() {
    const { _id, likedBy, currentUser } = this.props
    console.log('CLICK (RecipeItem)', _id, currentUser)
    this.props.toggleLikeAction({ _id, likedBy }, currentUser)
  }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, liked, photo, likedBy } = this.props
    const categories = { vegan, vegetarian, pescatarian }

    return(
      <article className="RecipeItem">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />

          <h1>
            <Link to={`/recipes/${_id}`}>{ title }</Link>
          </h1>

          <ul className="categories">
            <RecipeCategory { ...categories } />
          </ul>
        </header>
        <div>
          <p>{ summary }</p>
        </div>
        <footer>
          <LikeButton
            liked={ liked }
            likes={likedBy.length}
            onChange={ this.toggleLike.bind(this) } />
        </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }, { likedBy }) => {
  return {
    currentUser,
    liked: likedBy.filter((like) => (like === (currentUser && currentUser._id))).length > 0
  }
}
const mapDispatchToProps = { toggleLikeAction }

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem)
