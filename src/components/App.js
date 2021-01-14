import React, { Component } from "react";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Increment = (e) => {
    const name = e.target.dataset.name;
    console.log(name);
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.stategood + this.stateneutral + this.statebad;
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad, countTotalFeedback } = this.state;
    return (
      <>
        <div className="feedback">
          <h1 className="title">Please leave feedback</h1>
          <button
            className="btn"
            data-name="good"
            type="button"
            onClick={this.Increment}
          >
            Good
          </button>
          <button
            className="btn"
            data-name="neutral"
            type="button"
            onClick={this.Increment}
          >
            Neutral
          </button>
          <button
            className="btn"
            data-name="bad"
            type="button"
            onClick={this.Increment}
          >
            Bad
          </button>
        </div>
        <div className="statistics">
          <h2 className="title">Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {countTotalFeedback}</p>
          <p>Percent: 0</p>
        </div>
      </>
    );
  }
}
