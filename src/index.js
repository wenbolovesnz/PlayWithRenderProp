import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  state = {
    on: false
  };
  onToggle() {
    this.setState({ on: !this.state.on });
  }
  render() {
    return this.props.render(this.state.on, this.onToggle.bind(this));
  }
}

render(
  <App
    render={(on, handleClick) => {
      return (
        <div style={styles}>
          <p>Click below!</p>
          <Hello on={on} handleClick={handleClick} />
        </div>
      );
    }}
  />,
  document.getElementById("root")
);
