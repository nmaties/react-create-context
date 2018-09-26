import React, { Component } from 'react';
import { AppProvider } from '../../contexts/StoreContext';
import ChatBox from '../ChatBox/ChatBox';
import NewMessage from '../NewMessage/NewMessage';
import StoreData from '../StoreData/StoreData';
import { StoreContext } from '../../contexts/StoreContext';
import './App.css';

const AppComponentStyle = {
  background: 'red',
  padding: '10px',
  borderRadius: '5px',
  marginTop: '10px'
};

class App extends Component {
  render() {
    return (
      <AppProvider>
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
        <StoreContext.Consumer>
          {(context) => {
            if (context.state.messages.length) {
              return (<div className="container">
                <h1>My Store ?</h1>
                <hr/>
                <div className="row col-sm-12">
                  <StoreData/>
                </div>
              </div>)
            }
          }}
        </StoreContext.Consumer>
      </AppProvider>
    );
  }
}

export default App;

