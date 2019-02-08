import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      completed: '',
      log: '2222'
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { title, completed, startDate } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Title{this.state.log}</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <label>Completed</label>
        <input
          type="text"
          name="completed"
          value={completed}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
