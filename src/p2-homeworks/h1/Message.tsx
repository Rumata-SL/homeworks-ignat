import React from 'react'
import m from './Message.module.css'

type MessagePropsTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsTypes) {
    return (
        <div className={m.message}>
            <div className={m.ava}>
                <img src={props.avatar} alt="ava"/>
            </div>
            <div className={m.dialog}>
                <p className={m.user}>{props.name}</p>
                <div >
                    <p>{props.message} <span className={m.time}>{props.time}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Message
