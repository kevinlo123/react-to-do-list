import React, {Component} from 'react';
import '../stylesheets/To-do-item.scss';

class ToDoItem extends Component {
  constructor(){
    super();
    this.state = {
      task: "Get a haircut"
    }
  }
  render(){
    return(
      <div className="task-container">
        <input className="task-radio" type="radio" name="task-radio"/>
        <h1 className="todo-item">{this.props.task}</h1>
      </div>
    );
  }
}

export default ToDoItem;