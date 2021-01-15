import React, { Component } from "react";
// import Wrapper from "./Styled";
// import statistics from "./components/Statistics";
import Section from "./section/Sections";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = (e) => {
    const name = e.target.dataset.name;
    this.setState((state) => ({
      [name]: state[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.floor((good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.increment}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Statistics
              {...this.state}
              // good={this.good}
              // neutral={this.neutral}
              // bad={this.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>
      </>
    );
  }
}
