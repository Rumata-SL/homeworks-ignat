import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Sergey',
    message: 'Hello world! Hello world! Hello world! Hello world! Hello world! Hello world! Hello world! Hello world! ',
    time: '04:00',
}

function HW1() {
    return (
        <div>
            <div><h1>homework 1</h1></div>
            <hr/>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
