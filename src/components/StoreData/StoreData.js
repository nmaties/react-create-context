import React, { Component } from 'react';
import { StoreContext } from '../../contexts/StoreContext';

class StoreData extends Component {
  render() {
    return (
      <React.Fragment>
        <StoreContext.Consumer>
          {(context) => (
            context.state.messages.map((el) =>{
              return (<span className="col-sm-6" key={el.id}>
                author: {el.author} <br/>
                message: {el.message} <br/>
                date: {el.date} <br/>
                id: {el.id} <br/>
                <hr/>
              </span>)
            })
          )}
        </StoreContext.Consumer>
      </React.Fragment>
    );
  }
}

export default StoreData;
