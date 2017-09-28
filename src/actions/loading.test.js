import { expect } from 'chai'
import loading, { APP_LOADING, APP_DONE_LOADING } from './loading'

describe('loading action', () => {
  it(APP_LOADING, () => {
    expect(loading(true).type).to.eq(APP_LOADING)
  })

  it(APP_DONE_LOADING, () => {
    expect(loading(false).type).to.eq(APP_DONE_LOADING)
  })
})
