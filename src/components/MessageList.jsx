import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <div>Message List</div>
      <ul>
        {loadMessages.map((msg) => {
          return <li key={msg.id}>{`${msg.id}--${msg.label}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default MessageList;
