// src/components/Loading.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import loadingGif from '../images/loading.gif'

export class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool
  }

  render() {
    const { loading } = this.props

    if (!loading) return null

    return (
      <div className="loading">
        <img src={loadingGif} alt="Loading" />
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(Loading)
