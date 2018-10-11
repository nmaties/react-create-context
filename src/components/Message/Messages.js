import React from 'react';
import { withMessages } from '../../contexts/StoreContext';

const MessageStyle ={
  backgroundColor: 'blue',
  margin: '2px 0 2px 10px'
};

const MessageComponent = (props) => (<div>
      {props.messages.map((el) => {
        return (<div key={el.id} style={MessageStyle}>
          <span className="text-danger">{el.author} - {el.date}: {el.message} </span>
        </div>)
      })}
</div>);

const Messages = withMessages(MessageComponent);

export default Messages;
