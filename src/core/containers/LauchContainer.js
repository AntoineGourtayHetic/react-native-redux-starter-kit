/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lauch from '@components/Lauch'

class LauchContainer extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    return (
      <Lauch />
    )
  }
}

export default connect()(LauchContainer)
