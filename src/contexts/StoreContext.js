import React, { Component } from 'react';
const StoreContext = React.createContext();

class MessageProvider extends Component {
    constructor(props){
      super(props);

      this.state = {
        messages: []
      }
    }

    updateValue = (val) => {
        const value = this.state.messages.concat([val]);
        this.setState({ messages: value });
    };

    render(){
      return (
        <StoreContext.Provider value={{ state: this.state, updateValue: this.updateValue }}>
          {this.props.children}
        </StoreContext.Provider>
      )
    }
}


const withMessages = (WrappedComponent) => class extends Component {

  addMessage = (context) => (val) => context.updateValue(val);

  render(){
    return (
      <StoreContext.Consumer>
        {(context) => (
         <WrappedComponent
          messages={context.state.messages}
          addMessage={this.addMessage(context)}
          {...this.props}
        />)}
      </StoreContext.Consumer>
    )
  }
};


export { StoreContext, MessageProvider, withMessages };
