import { USER_SIGNED_IN } from '../actions/user/sign-in'

const CURRENT_USER_KEY = 'currentUserRecipesB10'

const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || 'null')

export default (state = currentUser, { type, payload } = {}) => {
  switch (type) {
    case USER_SIGNED_IN :
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(payload))
      return { ...payload }

    default :
      return state
  }
}
