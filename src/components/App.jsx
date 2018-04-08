import React, { Component } from 'react';
import Header_also_todos from './Header.jsx';
import ToDoItem from './To-do-item.jsx';
import DeleteAdd from './DeleteAdd.jsx';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <Header_also_todos/>
        <DeleteAdd/>
      </div>
    );
  }
}

export default App;
