import { createStore, combineReducers } from "redux";
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./users-reducer"

let reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

export default store