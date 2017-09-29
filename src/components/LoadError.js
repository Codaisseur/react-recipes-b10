// src/components/LoadError.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './LoadError.css'

export class LoadError extends PureComponent {
  state = { visible: true }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error && nextProps.error !== this.props.error) {
      this.setState({
        visible: true
      })

      setTimeout(this.dismiss.bind(this), 5000)
    }
  }

  dismiss() {
    this.setState({
      visible: false
    })
  }

  render() {
    const { error } = this.props
    const { visible } = this.state

    if (!error || !visible) return null

    return (
      <div className="LoadError">
        <p>
          {error}
          <button onClick={this.dismiss.bind(this)}>x</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = ({ loadError }) => ({ error: loadError })

export default connect(mapStateToProps)(LoadError)
