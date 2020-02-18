import React, { useEffect, useState } from "react";
import socketApi, { receiveMessageSubscriber } from "../socketApi";
import ViewMessages from "./ViewMessages";

const Chat = props => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    socketApi.emit("create_message", {text});
    setText("");
  };

  useEffect(() => {
    console.log("useEffect");
    receiveMessageSubscriber(setData);
    return () => {
      socketApi.emit('leave_room');
    };
  }, []);

  return (
    <div>
      <ViewMessages messages={data} />
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default Chat;
