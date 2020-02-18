import React, { useEffect, useState } from "react";

const ViewMessages = ({ messages }) => {
  return (
    <ul>
      {messages.map(item => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>
  );
};

export default ViewMessages;
