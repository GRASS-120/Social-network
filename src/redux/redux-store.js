import { createStore, combineReducers } from "redux";
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer
})

let STORE = createStore(reducers)



export default STORE