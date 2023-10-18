import React, { Component } from 'react'
import MenuItemComponent from './MenuItem'
import DishDetailComponent from './DishDetails';
import { CardColumns,Modal, ModalFooter,Button } from 'reactstrap';
import { connect } from 'react-redux';


const mapStateToProps = (state) =>{
  console.log(state);

  return {
    dishes : state.dishes,
    comments : state.comments
  }

}
class MenuComponent extends Component {
  state = {
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
    const menu = this.props.dishes.map(dish => {
      return (
      <MenuItemComponent 
        dish = {dish} 
        key = {dish.id} 
        onSelectDish = {this.onSelectDish}
      />
      )
    });
    let dishDetail = null;
    if(this.state.selctedDish != null){
      const commments = this.props.comments.filter(comment => {
        return comment.dishId === this.state.selctedDish.id;})
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

export default connect(mapStateToProps)(MenuComponent);