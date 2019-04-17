import React, {Component} from 'react';
import '../stylesheets/DeleteAdd.scss'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class DeleteAdd extends Component {
   constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state = {
         show: false,
      };
   }

   handleClose() {
      this.setState({ show: false });
   }

   handleShow() {
      this.setState({ show: true });
   }

   render() {
      return (
         <div>
            <footer>
               <div className="delete" onClick={() => {this.props.removeItems(this.props.items)} }>
                  <i title="Clear completed" className="far fa-trash-alt"></i>
               </div>
               <div className="add-item" onClick={this.handleShow}>
                  <i style={this.style}title="Add a task" className="fas fa-plus"></i>
               </div>
            </footer>
            <Modal show={this.state.show} onHide={this.handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
               </Modal.Header>
               <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                  Close
                  </Button>
                  <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                  </Button>
               </Modal.Footer>
            </Modal>
         </div>
      );
   }
}

export default DeleteAdd;