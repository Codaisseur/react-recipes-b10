import { SEED_RECIPES } from '../actions/recipes/seed'
import { UPDATE_RECIPE } from '../actions/recipes/update'
import { CREATE_RECIPE } from '../actions/recipes/create'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SEED_RECIPES :
      return state.concat(payload)

    case CREATE_RECIPE :
      return [{ ...payload }].concat(state)

    case UPDATE_RECIPE :
      return state.map((recipe) => {
        if (recipe._id === payload._id) return { ...recipe, ...payload }
        return recipe
      })

    default :
      return state
  }
}
