import React, { Component } from 'react';
import Header from '../../shared/components/layout/Header';
import Content from '../../shared/components/layout/Content';
import Footer from '../../shared/components/layout/Footer';
import Table from './Table';
import AddTaskForm from './AddTaskForm';
import SearchTaskForm from './SearchTaskForm';
const axios = require('axios');

const URL = '/tasks';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      log: []
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
        //console.log(response);
        this.setState({ tasks: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
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

  handleCreate = async task => {
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
        //console.log(res.data);
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
      <div className="Home">
        <h1>React Tutorial {this.state.log}</h1>
        <p>Add a task with a title to the table.</p>
        <Table taskData={tasks} removeTask={this.handleDelete} />
        <h3>Add New</h3>
        <AddTaskForm handleSubmit={this.handleCreate} />
        <h3>Search Tasks</h3>
        <SearchTaskForm handleSubmit={this.handleSearch} />
      </div>
    );
  }
}

export default Home;
