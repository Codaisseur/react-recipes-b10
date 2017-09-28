// src/reducers/loading.test.js

import { expect } from 'chai'
import { APP_LOADING, APP_DONE_LOADING } from '../actions/loading'
import reducer from './loading'

const initialState = false

describe('loading reducer', () => {
  it('is initially false', () => {
    const eventualState = reducer()
    expect(eventualState).to.eq(initialState)
  })

  it(APP_LOADING, () => {
    const eventualState = reducer(false, { type: APP_LOADING })
    expect(eventualState).to.eq(true)
  })

  it(APP_DONE_LOADING, () => {
    const eventualState = reducer(true, { type: APP_DONE_LOADING })
    expect(eventualState).to.eq(false)
  })
})
