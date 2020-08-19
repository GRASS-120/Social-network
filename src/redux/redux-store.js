import { createStore, combineReducers } from "redux";
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store