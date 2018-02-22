import React, { Component } from 'react'
import { ErrorBoundaryFallbackComponent } from 'react-error-boundary'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

export default class MinimalErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]),
    onError: PropTypes.func,
    onRerendered: PropTypes.func,
    FallbackComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    rerender: PropTypes.bool,
  }

  static defaultProps = { onError: noop, onRerendered: noop, FallbackComponent: ErrorBoundaryFallbackComponent, rerender: false }

  state = { error: null, info: null }

  handleRerendered = () => {
    try {
      this.props.onRerendered()
    } catch (e) { /* noop */ }
  }

  componentDidCatch(error, info) {
    try {
      this.props.onError(error, info)
    } catch (e) { /* noop */ }
    if (this.props.rerender) {
      this.setState({ error, info }, this.handleRerendered)
    }
  }

  render() {
    const { error, info } = this.state
    const { rerender, FallbackComponent } = this.props
    if (error && !rerender) {
      return <FallbackComponent componentStack={info ? info.componentStack : ''} error={error} />
    }
    return this.props.children
  }
}
