import React, { Component } from "react";
import Container from "./AppStyled";
import Section from "./section/Sections";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistics/Statistics";
import Notification from "./notification/Notification";

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
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.increment}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              {...this.state}
              // good={this.good}
              // neutral={this.neutral}
              // bad={this.bad}
              // ось тут ми також можемо викликати метод total
              // total={this.total()}
              total={total}
              positivePercentage={percent}
            />
          )}
        </Section>
      </Container>
    );
  }
}
