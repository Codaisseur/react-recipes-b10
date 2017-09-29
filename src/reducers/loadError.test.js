// src/reducers/loadError.test.js

import { expect } from 'chai'
import { LOAD_ERROR } from '../actions/load-error'
import { LOAD_SUCCESS } from '../actions/load-success'
import reducer from './loadError'

const initialState = null

describe('loadError reducer', () => {
  it('is initially null', () => {
    const eventualState = reducer()
    expect(eventualState).to.eq(initialState)
  })

  it(LOAD_ERROR, () => {
    const errorPayload = { message: 'Whoops!' }
    const eventualState = reducer(null, { type: LOAD_ERROR, payload: errorPayload  })
    expect(eventualState).to.eq('Whoops!')
  })

  it(LOAD_SUCCESS, () => {
    const eventualState = reducer('Whoops!', { type: LOAD_SUCCESS })
    expect(eventualState).to.eq(null)
  })
})
