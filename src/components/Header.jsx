import React, {Component} from 'react';
import '../stylesheets/Header.scss';

class Header extends Component {
  constructor(){
    super();
    let date = new Date();
    let dd = date.getDate();  //current day
    let mm = date.getMonth() + 1; // current month January = 0
    let yyyy = date.getFullYear(); // current year
    date = `${mm}/${dd}/${yyyy}`;
    this.state = {
      date: date,
      tasksPending: 0
    }
  }
  render() {
    return(
      <div className="header-container">
        <h1 className="react-to-do-txt">React To-Do-List</h1>
        <header>
          <h1 className="date-header">{this.state.date}</h1>
          <h2 className="tasks-pending-header">{this.state.tasksPending} tasks Pending</h2>
        </header>
      </div>
    );
  }
}

export default Header;