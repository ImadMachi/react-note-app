import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary: ", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>something went wrong</h1>;
    }
    return this.props.children;
  }
}

export { ErrorBoundary as default };
