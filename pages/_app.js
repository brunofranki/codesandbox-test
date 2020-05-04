import { NextApp } from "onekijs";
import React from "react";
import settings from "../src/settings";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("ERROR !!!!!!!", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const MyApp = props => {
  return (
    <ErrorBoundary>
      <NextApp {...props} settings={settings} />
    </ErrorBoundary>
  );
};

export default MyApp;
