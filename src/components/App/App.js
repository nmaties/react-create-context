import React, { Component } from 'react';
import { MessageProvider, withMessages } from '../../contexts/StoreContext';
import ChatBox from '../ChatBox/ChatBox';
import NewMessage from '../NewMessage/NewMessage';
import StoreData from '../StoreData/StoreData';
import './App.css';

const AppComponentStyle = {
  background: 'red',
  padding: '10px',
  borderRadius: '5px',
  marginTop: '10px'
};

const StoreLog = withMessages(props => props.messages.length ? (<div className="container">
  <h1>My Store ?</h1>
  <hr/>
  <div className="row col-sm-12">
      { props.messages.map((el) => <div className="col-sm-6">
          author: {el.author} <br/>
          message: {el.message} <br/>
          date: {el.date} <br/>
          id: {el.id} <hr/>
      </div>)
      }
  </div>
</div>): '');

class App extends Component {
  render() {
    return (
      <div>
        <MessageProvider>
        <div className="container" style={AppComponentStyle}>
          <div className="row col-sm-12">
            <div className="col-sm-6 mr-md-auto">
              <ChatBox/>
            </div>
            <div className="col-sm-6 ml-md-auto">
              <NewMessage/>
            </div>
          </div>
        </div>
        <br/>
        <StoreLog />
        </MessageProvider>
      </div>
    );
  }
}

export default App;

