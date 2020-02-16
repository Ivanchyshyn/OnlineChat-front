import React, {useEffect, useState} from "react";
import socketApi from '../socketApi';


const Chat = props => {
    const [data, setData] = useState('Data');
    const [text, setText] = useState('');

    const handleClick = () => {
        socketApi.emit('user_data', text);
        setData(text);
        setText('');
    };

    useEffect(() => {
        console.log("useEffect");
        socketApi.on('news', ({data}) => setData(data));
    }, []);

    return (
        <div>
            {data}
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={handleClick}>Change</button>
        </div>

    );
};

export default Chat;
