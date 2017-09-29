// src/actions/recipes/toggleLike.js
import API from '../../api'
import loadError from '../load-error'
import loadSuccess from '../load-success'
import { history } from '../../store'

const api = new API()
const recipes = api.service('recipes')

export default (recipe, user) => {
  return (dispatch) => {
    api.app.authenticate()
    .then(() => {
      const liked = recipe.likedBy.filter((like) => (like === user._id)).length > 0
      recipes.patch(recipe._id, { like: !liked })
      .then(() => {
        dispatch({ type: 'LIKED_RECIPE' })
      })
      .catch((error) => {
        dispatch(loadError(error))
      })
    })
    .catch((error) => {
      dispatch(loadError({ message: 'You need to sign in before you can like recipes!' }))
      history.push('/sign-in')
    })
  }
}
