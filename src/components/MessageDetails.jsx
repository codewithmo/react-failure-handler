import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MessageDetails = () => {
  let { id } = useParams();
  let [messageId, setMessageId] = useState("");
  let [messageDetails, setMessageDetails] = useState({});
  useEffect(() => {
    axios
      .get(`/failure-messages/${id}`, {
        params: {
          id,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setMessageId(id);
        setMessageDetails(() => response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <div>Message details of id: {messageId}</div>
      <pre>{JSON.stringify(messageDetails)}</pre>
    </div>
  );
};

export default MessageDetails;
