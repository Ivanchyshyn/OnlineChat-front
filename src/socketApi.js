import io from "socket.io-client";

const socketApi = io("http://localhost:8000", {
  reconnectionAttempts: 2,
  transports: ["websocket"]
});

socketApi.on("connect", () => {
  console.log("Connected");
});

export default socketApi;

export const receiveMessageSubscriber = ({orderId, userId, contractorId, callback}) => {
  const room = `${orderId}_${contractorId}`;
  socketApi.on(room, ({ data }) => console.log('New data') || callback(data));
  socketApi.emit('join_room', {id: orderId, userId, contractorId})
};
