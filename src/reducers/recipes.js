import { SEED_RECIPES } from '../actions/recipes/seed'
import { UPDATE_RECIPE } from '../actions/recipes/update'
import { CREATE_RECIPE } from '../actions/recipes/create'
import { FETCHED_RECIPES } from '../actions/recipes/fetch'

const randomId = () => {
  return ['abcd', new Date().getTime()].join('')
}

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SEED_RECIPES :
      return state.concat(payload)

    case FETCHED_RECIPES :
      return [].concat(payload)

    case CREATE_RECIPE :
      let newId = randomId()
      while (state.map((r) => (r._id)).includes(newId)) { newId = randomId() }
      return [{ _id: newId, ...payload }].concat(state)

    case UPDATE_RECIPE :
      return state.map((recipe) => {
        if (recipe._id === payload._id) return { ...recipe, ...payload }
        return recipe
      })

    default :
      return state
  }
}
