import React, { Component } from 'react';
import { StoreContext } from '../../contexts/StoreContext';

const MessageStyle ={
  backgroundColor: 'blue',
  margin: '2px 0 2px 10px'
};

class Messages extends Component {
  render() {
    return (
      <div>
        <StoreContext.Consumer>
          {(context) => (
            context.state.messages.map((el) =>{
                return (<div key={el.id} style={MessageStyle}>
                    <span className="text-danger">{el.author} - {el.date}: {el.message} </span>
                </div>)
            })
          )}
        </StoreContext.Consumer>
      </div>
    );
  }
}


export default Messages;
