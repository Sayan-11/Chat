const message = (state=[], action)=>{
    switch (action.type) {
        case "ADD_MESSAGE":
        case "MESSAGE_RECEIVED":
        return(
            state.concat([
                {
                    message: action.message,
                    user: action.user,
                    messageId: action.messageId
                  }
            ]
        )
        
    )
    default:
    return state
} }


export default message