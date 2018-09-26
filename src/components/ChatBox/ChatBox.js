import React, { Component } from 'react';
import Messages from '../Message/Messages';

const ChatBoxStyle = {
    background: 'yellow',
    height: '400px',
    overflowY: 'auto'
};

const ChatBoxComponent = {
    background: 'yellow'
};

class ChatBox extends Component {
  render() {
    return (
      <div className="card" style={ChatBoxComponent}>
        <div className="card-header">
            Message Box
        </div>
        <div className="chat-box" style={ChatBoxStyle}>
          <Messages />
        </div>
      </div>
    );
  }
}

export default ChatBox;
