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
    // const { good, neutral, bad } = this.state;
    return (
      <>
        <div className="feedback">
          <h1 className="title">Please leave feedback</h1>
          <button
            className="btn"
            name="good"
            type="button"
            onClick={this.Increment}
          >
            Good
          </button>
          <button
            className="btn"
            name="neutral"
            type="button"
            onClick={this.Increment}
          >
            Neutral
          </button>
          <button
            className="btn"
            name="bad"
            type="button"
            onClick={this.Increment}
          >
            Bad
          </button>
        </div>
        <div className="statistics">
          <h2 className="title">Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>0</p>
          <p>0</p>
        </div>
      </>
    );
  }
}
