// src/recipes/RecipeItem.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'
import veganIcon from '../images/vegan.svg'
import vegetarianIcon from '../images/vegetarian.svg'
import pescatarianIcon from '../images/pescatarian.svg'

chai.use(chaiEnzyme())

const recipe = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('recipe')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).to.have.text(recipe.title)
  })

  it('shows a carrot when it is vegetarian', () => {
    expect(container.find('ul > li > img')).to.have.attr('src', vegetarianIcon)
  })

  describe('when it is pescatarian', () => {
    const container = shallow(<RecipeItem { ...recipe } vegetarian={false} pescatarian={true} />)

    it('shows a fish', () => {
      expect(container.find('ul > li > img')).to.have.attr('src', pescatarianIcon)
    })
  })

  describe('when it is vegan as well as vegetarian', () => {
    const container = shallow(<RecipeItem { ...recipe } vegetarian={true} vegan={true} />)

    it('only shows a corn thingy', () => {
      expect(container.find('ul > li > img')).to.have.attr('src', veganIcon)
    })
  })
})
