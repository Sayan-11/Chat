import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../actions/actions'

export default class textbox extends Component {
  render() {
    let input
    return (
        <section id="new-message"> 
            <input onKeyPress = {(e)=>{
                if (e.key ==="Enter"){
                    this.props.dispatch(addMessage(input.text, "User_1"))
                    input.text = ''
                }
            }}
            type="text"
            ></input>
        </section>
    )
  }
}

