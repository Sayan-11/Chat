const actionTypes = 
   {
    ADD_MESSAGE: "ADD_MESSAGE", 
    ADD_USER: "ADD_USER",
    MESSAGE_RECEIVED: "MESSAGE_RECEIVED",
    UPDATE_USER_LIST: "UPDATE_USER_LIST",
};

let messageId = 0;
let userId = 0;

export const addMessage = (message, user)=>{
    return{
    type : actionTypes.ADD_MESSAGE,
    messageId : messageId+1,
    message,
    user}
}

export const addUser = (user) =>{
    return{
    type : actionTypes.ADD_USER,
    userId : userId + 1,
    user}

}

export const messageReceived = (message, user)=>{
    return{
    type : actionTypes.MESSAGE_RECEIVED,
    messageId : messageId +1,
    message,
    user}
}

export const updateUsers = (users)=>{
    return{
    type : actionTypes.UPDATE_USER_LIST,
    users       }
}

