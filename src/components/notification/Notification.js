import React from "react";
import PropTypes from "prop-types";
import P from "./NotificationStyled";

const Notification = ({ message }) => {
  return <P>{message}</P>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
