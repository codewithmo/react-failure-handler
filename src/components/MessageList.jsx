import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageListItem from "./MessageListItem";
import { Link } from "react-router-dom";

const MessageList = () => {
  const [loadMessages, setLoadMessages] = useState([]);
  useEffect(() => {
    axios
      .get("/failure-messages")
      .then(function (res) {
        console.log(res.data);
        setLoadMessages(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div className="center-content">
      <div className="message-list">
        {loadMessages.map((msg) => {
          return (
            <Link to={`/messages/${msg.id}`}>
              <MessageListItem
                key={msg.id}
                status={msg.status}
                id={msg.id}
              ></MessageListItem>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MessageList;
