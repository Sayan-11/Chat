import React, { Component } from 'react';
import './App.css';
import {messageList} from './components/messageList'
import {sidebar} from './components/sidebar'
import {textbox} from './components/textbox'

class App extends Component {
  render() {
    return (
        <div id="container">
          <aside id="sidebar"><sidebar/></aside>
          <section id="main">
          <section id="messages-list"><messageList/></section>
          <section id="new-message"><textbox/></section>
          </section>
        </div>
    );
  }
}

export default App;
