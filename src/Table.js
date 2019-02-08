import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Complete</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.taskData.map((row, index) => {
    return (
      <tr key={row._id}>
        <td>{row._id}</td>
        <td>{row.title}</td>
        <td>{row.completed}</td>
        <td>
          <button onClick={() => props.removeTask(row._id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { taskData, removeTask } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody taskData={taskData} removeTask={removeTask} />
      </table>
    );
  }
}

export default Table;
