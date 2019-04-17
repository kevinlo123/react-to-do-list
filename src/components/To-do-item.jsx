import React, {Component} from 'react';
import DeleteAdd from './DeleteAdd.jsx';
import '../stylesheets/To-do-item.scss';

class ToDoItem extends Component {

   constructor(props) {
      super(props);
      this.state = {
         toDos: this.startingToDos
      };
   }

   startingToDos = [
      {id: 1, task: "Get a haircut", done: false},
      {id: 2, task: "Walk the dog", done: false},
      {id: 3, task: "Gym", done: false},
      {id: 4, task: "Grocery shopping", done: false},
      {id: 5, task: "Work", done: false}
   ];
   
   taskFinished(event) {
      event.target.classList.toggle("custom-radio-checked");
      event.target.nextSibling.classList.toggle("checked");
      if (event.target.nextSibling.classList.contains("checked")) {
         this.props.ontasksPendingDone()
      } else {
         this.props.ontasksPendingNotDone()
      }
      this.updateEvent(this.state.toDos, event);
   }

   updateEvent(array, event) {
      array.forEach((item) => {
         if (parseFloat(event.target.nextSibling.getAttribute("data-key")) === item.id) {
            return (
               !item.done ? item.done = true : item.done = false
            );
         }
      });  
   }

   removeItems(currentItems) {
      const filteredToDos = currentItems.filter(item => !item.done); 
      this.setState({
         toDos: filteredToDos
      });
   }

   render() {
      const items = this.state.toDos.map((item) => {
         return (
            <div key={item.id.toString()} className="task-container">
               <div onClick={this.taskFinished.bind(this)} ref="custom-radio" className="custom-radio"></div>
               <h1 data-key={item.id.toString()} className="todo-item">{item.task}{this.state.tasksLeft}</h1>
            </div>
         )
      });
      return (
         <div>
            {items}
            <DeleteAdd items={this.state.toDos} removeItems={this.removeItems.bind(this)}/>                     
         </div>
      );
   }
}

export default ToDoItem;