// src/recipes/RecipeEditor.js
import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import createRecipe from '../actions/recipes/create'
import './RecipeEditor.css'

const TYPES = [
  'vegan',
  'vegetarian',
  'pescatarian'
]

class RecipeEditor extends PureComponent {
  constructor(props) {
    super()

    const { title, summary, vegan, vegetarian, pescatarian, photo } = props

    this.state = {
      title: title || '',
      summary,
      vegan,
      vegetarian,
      pescatarian,
      photo: photo || '',
      errors: {}
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: event.target.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: event.target.value
    })
  }

  updateIntro(text, medium) {
    this.setState({
      summary: text
    })
  }


  setType(event) {
    this.setState({
      vegan: event.target.value === 'vegan',
      vegetarian: event.target.value === 'vegetarian',
      pescatarian: event.target.value === 'pescatarian'
    })
  }

  validate() {
    const isTitleValid = this.validateTitle()
    const isSummaryValid = this.validateSummary()
    this.setState({
      errors: {
        title: isTitleValid ? null : 'The title can not be blank!',
        summary: isSummaryValid ? null : 'The summary should be at least 30 characters long!'
      }
    })
    return isTitleValid && isSummaryValid
  }

  validateTitle() {
    const { title } = this.state
    return title && title.length > 0
  }

  validateSummary() {
    const { summary } = this.state
    return summary && toMarkdown(summary).length > 30
  }

  saveRecipe() {
    if (!this.validate()) return

    const {
      title,
      summary,
      vegetarian,
      vegan,
      pescatarian,
      photo,
    } = this.state

    const recipe = {
      title,
      summary: toMarkdown(summary),
      vegetarian,
      vegan,
      pescatarian,
      liked: false,
      photo,
    }

    this.props.save(recipe)

    this.setState({
      title: '',
      summary: '',
      photo: '',
      vegetarian: null,
      vegan: null,
      pescatarian: null
    })
  }

  render() {
    const { errors } = this.state

    return (
      <div className="editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.updateTitle.bind(this)} />

        { errors.title ? <small className="error">{errors.title}</small> : null }

        <Editor
          ref="summary"
          options={{
            placeholder: {text: 'Write an Introduction...'}
          }}
          value={this.state.summary}
          onChange={this.updateIntro.bind(this)}
          text={this.state.summary} />

        { errors.summary ? <small className="error">{errors.summary}</small> : null }

        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Photo URL"
          value={this.state.photo}
          onChange={this.updatePhoto.bind(this)} />

        {TYPES.map((type) => {
          return <label key={type} htmlFor={type}>
            <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
            {type}
          </label>
        })}

        <div className="actions">
          <button className="primary" onClick={this.saveRecipe.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createRecipe }

export default connect(null, mapDispatchToProps)(RecipeEditor)
