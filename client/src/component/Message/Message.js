import React from "react";
import "./Message.css";

const Message = ({ user, message, classs }) => {
  if (user) {
    return <div className={`messageBox ${classs}`}>{`${user}:${message}`}</div>;
  } else {
    return <div className={`messageBox ${classs}`}>{`You: ${message}`}</div>;
  }
};

export default Message;

// // Message.js
// import { connect } from 'react-redux';

// const Message = ({ user, message, classs, updateMessage }) => {
//   // Your component code
// };

// const mapStateToProps = (state) => ({
//   message: state.message.message,
// });

// const mapDispatchToProps = {
//   updateMessage,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Message);
// // Inside your component where you want to dispatch the action
// updateMessage(newMessage);
