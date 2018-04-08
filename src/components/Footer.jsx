import React, {Component} from 'react';
import '../stylesheets/Footer.scss'

class Footer extends Component{
  render(){
      return(
        <footer>
          <div className="delete">
            <i title="Clear completed" class="far fa-trash-alt"></i>
          </div>
          <div className="add-item">
            <i title="Add a task" class="fas fa-plus"></i>
          </div>
        </footer>
      );
  }
}

export default Footer;