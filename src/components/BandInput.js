import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ""
  }

  handleChange = (ev) => {
    this.setState({text: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch({type: "ADD_BAND", payload: this.state.text})
    this.setState({text: ""})
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <input type='text' onChange={this.handleChange} value={this.state.text}/>
      <input type='submit' />
    </form>
    );
  }
};

export default BandInput;
