import React, {Component} from 'react';
import '../stylesheets/DeleteAdd.scss'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class DeleteAdd extends Component {

   constructor(props, context) {
      super(props, context);
      this.state = {
         show: false,
         inputValue: ""
      };
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.updateInputValue = this.updateInputValue.bind(this);
   }

   handleClose() {
      this.setState({
         show: false 
      });
   }

   handleShow() {
      this.setState({
         show: true
      });
   }

   updateInputValue(event) {
      this.setState({
        inputValue: event.target.value
      });
   }

   clearInputValue() {
      this.setState({
        inputValue: ""
      });
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
                  <Modal.Title>Add a New Task</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form>
                     <Form.Group controlId="formBasicEmail">
                        <Form.Label>Item</Form.Label>
                        <Form.Control 
                           type="text"
                           placeholder="New Item"
                           value={this.state.inputValue}
                           onChange={(event) => this.updateInputValue(event)} 
                        />
                     </Form.Group>
                  </Form> 
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="primary" onClick={() => {this.handleClose(); this.props.addItem(this.state.inputValue); this.clearInputValue();}}>Save Task</Button>
               </Modal.Footer>
            </Modal>
         </div>
      );
   }
}

export default DeleteAdd;