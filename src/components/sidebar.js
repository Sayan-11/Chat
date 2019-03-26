import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../actions/actions'

class sidebar extends Component {
  render() {
    return (
      <div>
      <ul>
      {
    this.props.users.map(user => <li>{user.name}</li>) 
      }
      </ul>
      </div>
    )
  }
}

function mapPropsToState(state, users){
    return(
        {
        users : state.users
        }
    )
}

export default connect(mapPropsToState)(sidebar)