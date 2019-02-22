import React, { Component } from 'react';

class AddTaskForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      completed: false,
      completedAt: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  // handleChange = event => {
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });
  // };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { title, completed, completedAt } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <label>Completed</label>
        <input
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={this.handleChange}
        />
        <label>Completed At</label>
        <input
          type="date"
          name="completedAt"
          value={completedAt}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default AddTaskForm;
