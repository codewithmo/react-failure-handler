import React from "react";
import { BiRightArrow } from "react-icons/bi";
import styled from "styled-components";

const MessageListItem = ({ id, status }) => {
  const StyledStatusBox = styled.div`
    background: ${(props) => (props.isResolved ? "#27AE60" : "#EB5757")};
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    color: black;
    text-decoration: none;
  `;
  const isResolved = status === "RESOLVED" ? true : false;
  return (
    <div className="message-list-item flex-box">
      <StyledStatusBox
        isResolved={isResolved}
        className="status-btn center-content"
      >
        {status}
      </StyledStatusBox>
      <div className="msg-id center-content">{id}</div>
      <div className="center-content">
        <BiRightArrow />
      </div>
    </div>
  );
};

export default MessageListItem;
