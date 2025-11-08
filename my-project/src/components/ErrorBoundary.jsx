import React from 'react'

// A simple error boundary for critical sections
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error) {
    // update state to show fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // logging for now, could integrate external logging later
  }

  render() {
    if (this.state.hasError) {
      //  a fallback UI for errors
      return (
        <div className="p-6">
          <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded">
            <h3 className="font-semibold">Oops! Something went wrong.</h3>
            <pre className="mt-2 text-xs whitespace-pre-wrap">
              {String(this.state.error)}
            </pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
