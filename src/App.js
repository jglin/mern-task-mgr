import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
const axios = require('axios');

const URL = '/tasks';

class App extends Component {
  state = {
    tasks: [],
    log: []
  };

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
        console.log(response);
        this.setState({ tasks: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });

    //this.setState({ log: this.getAllTasks() });
  }

  // componentDidMount() {
  //   this.setState({ tasks: this.getAllTasks() });
  // }

  // getAllTasks = async () => {
  //   return await axios
  //     .get(URL)
  //     .then(response => {
  //       return response.data.tasks;
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };

  handleSubmit = async task => {
    let createdTask = await axios
      .post(URL, task)
      .then(res => {
        return res.data;
      })
      .catch(e => {
        console.log(e);
      });
    this.setState({
      log: `POST: ${JSON.stringify(createdTask, undefined, 2)}`
    });
    this.setState({ tasks: [...this.state.tasks, createdTask] });
  };

  handleDelete = id => {
    // delete task from database
    axios
      .delete(`${URL}/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    // remove deleted task from state
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter(task => {
        return task._id !== id;
      })
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="container">
        <h1>React Tutorial {this.state.log}</h1>
        <p>Add a task with a title to the table.</p>
        <Table taskData={tasks} removeTask={this.handleDelete} />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
