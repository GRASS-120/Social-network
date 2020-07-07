const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: "John Snow" },
        { id: 2, name: "Sara Arrow" },
        { id: 3, name: "Jack de Vall" },
    ],

    messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Hello!" },
        { id: 3, message: "Happy New Year 2020!" },
    ],

    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_MESSAGE:
    
            let newMessage = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: state.newMessageText
            } 

            return {
                ...state,  // ???????? ????? ?????? ????, ??? ????? ??????????
                newMessageText: '',
                messages: [...state.messages, newMessage]  // stateCopy.messages.push(newMessage); => push() ??? ?? ???., ??????? ??????????? ??? ???
            }

        case CHANGE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.text
            }

        default:
            return state
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeNewMessageTextActionCreator = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, text: text})

export default dialogsReducer