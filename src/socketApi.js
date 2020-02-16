import io from "socket.io-client";

const socketApi = io('http://localhost:8000',{
    reconnectionAttempts : 2,
    transports: ['websocket'],
});

socketApi.on('connect', () => {
    console.log('Connected');
});

export default socketApi;
