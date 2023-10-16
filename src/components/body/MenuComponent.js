import React, { Component } from 'react'
import MenuItemComponent from './MenuItem'
import DISHES from '../../data/dishes'
import COMMENTS from '../../data/comments';
import DishDetailComponent from './DishDetails';
import { CardColumns,Modal, ModalFooter,Button } from 'reactstrap';

class MenuComponent extends Component {
  state = {
    dishes : DISHES,
    comments : COMMENTS,
    selctedDish : null,
    modalOpen : false,
  };

  onSelectDish = (dish) =>{
    this.setState({
      selctedDish : dish,
      modalOpen : true
    });

  }

  toggleModal = () => {
    this.setState({modalOpen : !this.state.modalOpen});
  }

  render(){
    document.title = 'Menu';
    const menu = this.state.dishes.map(dish => {return (<MenuItemComponent dish = {dish} key = {dish.id} onSelectDish = {this.onSelectDish}/>)});
    let dishDetail = null;
    if(this.state.selctedDish != null){
      const commments = this.state.comments.filter(comment => {return comment.dishId === this.state.selctedDish.id;})
      dishDetail = <DishDetailComponent dish = { this.state.selctedDish
    }
    comments = {commments}
    />}
    return (
      <div className='container'>
        <div className='row'>
          <CardColumns>
          {menu}
          </CardColumns>
          <Modal isOpen = {this.state.modalOpen} onClick={this.toggleModal}>
            {dishDetail}
            <ModalFooter>
            <Button color = 'primary' onClick = {this.toggleModal}>Close</Button>
          </ModalFooter>
          </Modal>
          
        </div>
  
        </div>
    )

  }
}

export default MenuComponent