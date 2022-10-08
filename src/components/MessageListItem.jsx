import React from "react";
import { BiRightArrow } from "react-icons/bi";

const MessageListItem = ({id, status}) => {
    
  return (
    <div className="message-list-item flex-box">
      <div className="status-btn center-content">{status}</div>
      <div className="msg-id center-content">{id}</div>
      <div className="arrow-icon center-content"><BiRightArrow className="arrow-icon"></BiRightArrow></div>
    </div>
  );
};

export default MessageListItem;
