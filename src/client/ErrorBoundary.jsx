import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error: error, errorInfo: errorInfo });
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.errorInfo) {
      // Extract file path and name from componentStack using regex
      const componentStack = this.state.errorInfo.componentStack;
      const match = componentStack.match(/src\/.*?\.jsx/);
      const filePath = match ? match[0] : "Unknown";
      const fileName = filePath.split("/").pop();

      return (
        <div>
          <h2>Something went wrong.</h2>
          <details
            open={true}
            style={{
              whiteSpace: "pre-wrap",
              border: "2px solid red",
              padding: 20,
            }}
          >
            <summary style={{ cursor: "pointer" }}>Error Details</summary>
            <div>
              <p>{this.state.error && this.state.error.toString()}</p>
              <p>File Name: {fileName}</p>
              <p>Path: {filePath}</p>
              <p>Stack: {this.state.errorInfo.componentStack}</p>
            </div>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
