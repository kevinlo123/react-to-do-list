import React, { Component } from 'react';
import HeaderAlsoTodos from './Header.jsx';

class App extends Component {

   constructor() {
      super();
      let date = new Date();
      let dd = date.getDate();  //current day
      let mm = date.getMonth() + 1; // current month January = 0
      let yyyy = date.getFullYear(); // current year
      date = `${mm}/${dd}/${yyyy}`;
      this.state = {
         date: date
      }
  }

   render() {
      return (
         <div className="App-wrapper">
            <HeaderAlsoTodos date={this.state.date}/>
         </div>
      );
   }
}

export default App;
