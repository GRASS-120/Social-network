import React from 'react';
import a from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';
import {addMessageActionCreator, changeNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Message from './Dialog/Message/Message';


const Dialogs = ( {dialogsPage, dispatch} ) => {

    let {dialogs, messages, newMessageText} = dialogsPage

    let addNewMessage = () => {
        let action = addMessageActionCreator()
        dispatch(action)
    }

    let onMessageChange = (event) => {
        let text = event.target.value
        let action = changeNewMessageTextActionCreator(text)
        dispatch(action)
    }


    let elemDialogs = dialogs.map( (item) => {
        return (<Dialog name={item.name} id={item.id}/>)
    })

    let elemMessages = messages.map( (item) => {
        return (<Message message={item.message} id={item.id}/>)
    })

    return (
        <div className={a.dialogs_block}>
            <div className={a.dialogs_list}>
                {elemDialogs}
            </div>

            <div className={a.messages}>
                <div className={a.message_title}>
                    <p>John Snow</p>
                    <p>В сети 💻</p>
                </div>

                <div className={a.messages_window}>
                   {elemMessages}
                </div>

                <div className={a.new_message}>
                    <input className={a.new_message_text} placeholder="Your text..." onChange={onMessageChange} value={newMessageText}></input>
                    <button className={a.add_new_message} onClick={addNewMessage}>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs