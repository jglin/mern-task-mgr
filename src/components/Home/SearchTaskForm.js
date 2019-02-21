import React, { Component } from 'react';

class SearchTaskForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      startDate: '',
      endDate: '',
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
    const { startDate, endDate } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <h2>Log: {this.state.log}</h2>
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={this.handleChange}
        />
        <label>End Date</label>
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default SearchTaskForm;
