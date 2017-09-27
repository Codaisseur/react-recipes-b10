import { expect } from 'chai'
import reducer from './recipes'
import freeze from 'deep-freeze-node'

import { SEED_RECIPES } from '../actions/recipes/seed'
import { UPDATE_RECIPE } from '../actions/recipes/update'

const seedData = freeze([
  {
    _id: 'abcd123',
    title: 'Some Recipe Title'
  }
])

describe('Recipes Reducer', () => {
  const actualState = reducer()
  const initialState = freeze([])

  it('the initial state is an array', () => {
    expect(actualState).to.eql(initialState)
  })

  describe(SEED_RECIPES, () => {
    const action = freeze({
      type: SEED_RECIPES,
      payload: seedData
    })
    const newState = reducer(initialState, action)

    it('adds the payload with seed data to the state', () => {
      expect(newState).to.eql(seedData)
    })
  })

  describe(UPDATE_RECIPE, () => {
    const action = freeze({
      type: UPDATE_RECIPE,
      payload: { _id: 'abcd123', liked: true }
    })
    const newState = reducer(seedData, action)

    it('updates the recipe with the same _id', () => {
      expect(newState[0].liked).to.eq(true)
    })
  })
})
