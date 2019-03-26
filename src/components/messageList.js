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

function mapStateToProps(state){
    return {messages: state.messages}
}

export default connect(mapStateToProps)(messageList)
