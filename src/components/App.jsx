import React, { Component } from 'react';
import Header from './Header.jsx';
import ToDoItem from './To-do-item.jsx';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <Header/>
        <ToDoItem task="Get a haircut"/>
        <ToDoItem task="Walk the dog"/>
        <ToDoItem task="meeting @ 5pm"/>
        <ToDoItem task="Groceries"/>
        <ToDoItem task="Code"/>
      </div>
    );
  }
}

export default App;
