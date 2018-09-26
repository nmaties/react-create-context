import React, { Component } from 'react';
import { StoreContext } from '../../contexts/StoreContext';

const NewMessageStyle = {
  background: 'green',
  padding: '10px',
  borderRadius: '5px'
};

class NewMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMessage: '',
      author: ''
    }
  }

  updateState = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({
      [name]: value
    })
  };

  postMessage = (ctx) => {
    ctx.updateValue('messages', {
      author: this.state.author,
      date: new Date().toJSON().slice(0, 10),
      message: this.state.newMessage,
      id: ((Math.random() * 1000000) + 1).toFixed(0)
    });

    this.setState({
      author: '',
      newMessage: ''
    });
  };

  render() {
    return (
      <div style={NewMessageStyle}>
        <StoreContext.Consumer>
          {(context) => (
            <form>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  name="author"
                  type="text"
                  value={this.state.author}
                  onChange={this.updateState}
                  className="form-control"
                  placeholder="Author"/>
              </div>
              <div className="form-group">
                <label htmlFor="newMessage">Message</label>
                <textarea
                  type="text"
                  name="newMessage"
                  className="form-control"
                  value={this.state.newMessage}
                  onChange={this.updateState}
                  style={{ 'resize': 'none' }}
                  placeholder="Message">{''}</textarea>
              </div>
              <div className="form-group text-right">
                <button
                  type="button"
                  disabled={!this.state.newMessage.length || !this.state.author}
                  onClick={this.postMessage.bind(this, context)}
                  className="btn btn-success">Post Message
                </button>
              </div>
            </form>
          )}
        </StoreContext.Consumer>
      </div>
    );
  }
}

export default NewMessage;
