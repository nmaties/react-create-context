import React, { Component } from 'react';
const StoreContext = React.createContext();

class AppProvider extends Component {
    constructor(props){
      super(props);

      this.state = {
        messages: []
      }
    }

    updateValue = (key, val) => {
        this.setState({ [key]: this.state.messages.concat([val]) });
    };

    render(){
      return (
        <StoreContext.Provider value={{ state: this.state, updateValue: this.updateValue }}>
          {this.props.children}
        </StoreContext.Provider>
      )
    }
}

export { StoreContext, AppProvider };
