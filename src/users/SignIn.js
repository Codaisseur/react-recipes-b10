import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import signIn from '../actions/user/sign-in'
import Title from '../components/Title'
import { Link } from 'react-router'

export class SignIn extends PureComponent {
  submitForm(event) {
    event.preventDefault()

    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }

    this.props.signIn(user)
  }

  render() {
    return (
      <div className="sign-up form">
        <Title content="Sign In" />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <input ref="email" type="email" placeholder="Email address" />
          </div>
          <div className="input">
            <input ref="password" type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Sign in" />
        </form>
        <p>
          Don't have an account yet?
          <Link to={'/sign-up'}>Sign up</Link>
        </p>
      </div>
    )
  }
}

export default connect(null, { signIn })(SignIn)
