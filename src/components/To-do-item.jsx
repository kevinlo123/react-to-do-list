import React, {Component} from 'react';
import '../stylesheets/To-do-item.scss';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDone: false,
      item: "todo-item",
      custom_radio: "custom-radio",
    };
  }
  taskFinished() {
    if(!this.state.taskDone){
      this.setState({
        taskDone: true,
        item: "checked",
        custom_radio: "custom-radio-checked",
      });
    }else if(this.state.taskDone){
      this.setState({
        taskDone: false,
        item: "todo-item",
        custom_radio: "custom-radio",
      });
    }
    this.state.custom_radio === "custom-radio" ? this.props.ontasksPendingDone() : this.props.ontasksPendingNotDone();
  }
  render() {
    return(
      <div className="task-container">
        <div className={this.state.custom_radio} onClick={this.taskFinished.bind(this)} ></div>
        <h1 className={this.state.item}>{this.props.task}</h1>
      </div>
    );
  }
}

export default ToDoItem;