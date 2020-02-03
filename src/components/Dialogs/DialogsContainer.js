import React from 'react';
import {addMessageActionCreator, changeNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'

const DialogsContainer = ( {dialogsPage, dispatch} ) => {


    let addNewMessage = () => {
        let action = addMessageActionCreator()
        dispatch(action)
    }

    let onMessageChange = (text) => {
        let action = changeNewMessageTextActionCreator(text)
        dispatch(action)
    }

    return (
        <Dialogs addNewMessage={addNewMessage} onMessageChange={onMessageChange} dialogsPage={dialogsPage}/>
    )
}

export default DialogsContainer