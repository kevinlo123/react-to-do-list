import React, {Component} from 'react';
import ToDoItem from './To-do-item.jsx'
import '../stylesheets/Header.scss';


class HeaderAlsoTodos extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         tasksLeft: 5
      };
   }

   ontasksPendingDone() {
      this.setState({
         tasksLeft: this.state.tasksLeft - 1
      });
   }

   ontasksPendingNotDone() {
      this.setState({
         tasksLeft: this.state.tasksLeft + 1
      });
   }

   render() {
      return(
         <div className="header-container">
            <h1 className="react-to-do-txt">React To-Do-List</h1>
            <header>
               <h1 className="date-header">{this.props.date}</h1>
               <h2 className="tasks-pending-header">{this.state.tasksLeft} tasks Pending</h2>
            </header>
            <ToDoItem ontasksPendingDone={this.ontasksPendingDone.bind(this)} ontasksPendingNotDone={this.ontasksPendingNotDone.bind(this)} />
         </div>
      );
   }
}

export default HeaderAlsoTodos;