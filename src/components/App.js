import React, { Component } from "react";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Increment = (e) => {
    const name = e.target.name;
    console.log(name);
    this.setState((state) => ({
      name: state[name] + 1,
    }));
  };
  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div className="feedback">
          <h1 className="title">Please leave feedback</h1>
          <button className="btn" name="good" onClick={this.Increment}>
            Good
          </button>
          <button className="btn" name="neutral" onClick={this.Increment}>
            Neutral
          </button>
          <button className="btn" name="bad" onClick={this.Increment}>
            Bad
          </button>
        </div>
        <div className="statistics">
          <h2 className="title">Statistics</h2>
          <span>Good {good}</span>
          <span>Neutral {neutral}</span>
          <span>Bad {bad}</span>
          <span>0</span>
          <span>0</span>
        </div>
      </>
    );
  }
}
