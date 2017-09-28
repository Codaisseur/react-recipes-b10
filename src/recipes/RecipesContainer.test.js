// src/recipes/RecipesContainer.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { RecipesContainer } from './RecipesContainer'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import recipes from '../fixtures/recipes'

chai.use(chaiEnzyme())
chai.use(spies)

describe('<RecipesContainer />', () => {
  const fetchRecipeSpy = chai.spy()
  const container = shallow(<RecipesContainer recipes={recipes} fetchRecipes={fetchRecipeSpy} />)

  it('invokes fetchRecipes when mounting', () => {
    expect(fetchRecipeSpy).to.have.been.called.exactly.once
  })

  it('is wrapped in a div with class name "recipes"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('recipes')
  })

  it('contains a Title', () => {
    expect(container).to.have.descendants(Title)
  })

  it('sets the Title to "All Recipes"', () => {
    expect(container).to.contain(<Title content="Recipes" />)
  })

  it('renders all recipes as a RecipeItem', () => {
    expect(recipes.length).to.not.eq(0)
    expect(container).to.have.exactly(recipes.length).descendants(RecipeItem)
  })
})
