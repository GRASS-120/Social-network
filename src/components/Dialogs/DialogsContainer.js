import {addMessageActionCreator, changeNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            let action = addMessageActionCreator()
            dispatch(action)
        },
        
        onMessageChange: (text) => {
            let action = changeNewMessageTextActionCreator(text)
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer