const users = (state=[], action)=>{
    switch (action.type) {
        case "ADD_USER":
        return(
            state.concat([
                {
                    user: action.user,
                    messageId: action.messageId
                  }
            ]
        )
        
    )
    case "UPDATE_USER_LIST":
    return(
        action.users
    )
    default:
      return state
} }

export default users