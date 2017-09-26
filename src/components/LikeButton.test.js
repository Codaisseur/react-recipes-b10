// src/components/LikeButton.test.js
import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import LikeButton from './LikeButton'
import spies from 'chai-spies'

chai.use(chaiEnzyme())
chai.use(spies)

describe('<LikeButton />', () => {
  const toggleLike = chai.spy()
  const button = shallow(<LikeButton onChange={toggleLike} liked={false} />)

  it('is wrapped in a paragraph with class "LikeButton"', () => {
    expect(button).to.have.tagName('p')
    expect(button).to.have.className('LikeButton')
  })

  describe('click it', () => {
    it('calls the onChange prop', () => {
      button.find('button').simulate('click')
      expect(toggleLike).to.have.been.called.exactly(1)
    })
  })
})
