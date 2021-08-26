import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
  }
  handleRed = (event) => {
    this.setState({
      red: event.target.value
    });
  };

  handleGreen = (event) => {
    this.setState({
      green: event.target.value
    });
  };

  handleBlue = (event) => {
    this.setState({
      blue: event.target.value
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor:
            "rgb(" +
            this.state.red * 2.55 +
            "," +
            this.state.green * 2.55 +
            "," +
            this.state.blue * 2.55 +
            ") ",
          height: "100vh"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: 200,
            padding: 20,
            borderRadius: 10
          }}
        >
          <h1> Color picker</h1>
          red:
          <input
            type="range"
            value={this.state.red}
            onChange={this.handleRed}
          />
          <br />
          green:
          <input
            type="range"
            value={this.state.green}
            onChange={this.handleGreen}
          />
          <br />
          blue:
          <input
            type="range"
            value={this.state.blue}
            onChange={this.handleBlue}
          />
          <br />
        </div>
      </div>
    );
  }
}
