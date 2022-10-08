import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "react-styled-box";
import { BiChevronDown } from "react-icons/bi";
import useCollapse from "react-collapsed";

const MessageDetails = () => {
  let { id } = useParams();
  let [messageDetails, setMessageDetails] = useState({});
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  function updateStatus() {
    axios
      .put(`/failure-messages/${id}`)
      .then(function (response) {
        setMessageDetails(() => response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    axios
      .get(`/failure-messages/${id}`)
      .then(function (response) {
        setMessageDetails(() => response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <Box flexDirection="column" width="100%" className="center-content">
      <Box className="item-box">
        <Box flexDirection="row" justifyContent="space-between">
          <Box className="box-btn center-content">
            {messageDetails.createdAt?.split("T")[0]}
          </Box>
          <Box className="box-btn center-content">{messageDetails.label}</Box>
          <Box className="box-btn center-content">{messageDetails.id}</Box>
          <Box className="box-btn center-content">{messageDetails.status}</Box>
        </Box>
        <Box>
          <Box className="center-content icon-down-box">
            <BiChevronDown
              {...getToggleProps({
                onClick: () => {
                  setExpanded((prevExpanded) => !prevExpanded);
                  if (messageDetails.status === "UNRESOLVED") updateStatus();
                },
              })}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </BiChevronDown>
          </Box>
        </Box>
      </Box>
      <Box>
        <section {...getCollapseProps()}>
          <Box className="exp-coll-box center-content">
            <pre>{JSON.stringify(messageDetails, null, 2)}</pre>
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default MessageDetails;
