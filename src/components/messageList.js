import React, { Component } from 'react'
import {connect} from 'react-redux'

class messageList extends Component {
  render() {
    return (
      <section id="messages-list">
        <ul>
      {
    this.props.messages.map(message => <li key={message.messageId}>{message}</li>) 
      }
      </ul>
      </section>
    )
  }
}

// mapStateToProps because the component needs to read data from the state
function mapStateToProps(state){
    return {messages: state.messages}
}

export default connect(mapStateToProps)(messageList)
