import {combineReducers} from 'redux'
import message from "./message"
import users from "./users"


const chat = combineReducers(
   { message,
    users }
)

export default chat