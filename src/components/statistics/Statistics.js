import React from "react";
import PropTypes from "prop-types";
import StList from "./StatisticsStyle";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const props = { good, neutral, bad };
  return (
    <StList>
      {/* <li className="stList_item">Good: {good}</li>
      <li className="stList_item">Bad: {neutral}</li>
      <li className="stList_item">Bad: {bad}</li> */}
      {Object.keys(props).map((item) => (
        <li className="stList_item" key={item}>
          {item[0].toUpperCase() + item.slice(1)}:<span>{props[item]}</span>
        </li>
      ))}
      <li className="stList_item">Total: {total}</li>
      <li className="stList_item">
        Positive Percentage: {positivePercentage} %
      </li>
    </StList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
