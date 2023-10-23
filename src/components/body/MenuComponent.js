import React, { Component } from 'react'
import MenuItemComponent from './MenuItem'
import DishDetailComponent from './DishDetails';
import { CardColumns,Modal, ModalFooter,Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment , fetchDishes} from '../../redux/actionCreators';
import thunk from 'redux-thunk';
import Loading from './Loading';

const mapStateToProps = (state) =>{

  return {
    dishes : state.dishes,
    comments : state.comments
  }

}

const mapDispatchToProps = dispatch => {
  return {
      addComment : (dishId , rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
      fetchDishes : () => dispatch(fetchDishes()),

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

  componentDidMount(){
    this.props.fetchDishes();
  }

  render(){
    document.title = 'Menu';
    if (this.props.dishes.isLoading) {
      return(
        <Loading/>
        
      );
    }
    else{
      const menu = this.props.dishes.dishes.map(dish => {
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
        dishDetail = <DishDetailComponent
         dish = { this.state.selctedDish}
         comments = {commments}
         addComment = {this.props.addComment}
  
      />}
      return (
        <div className='container'>
          <div className='row'>
            <CardColumns>
            {menu}
            </CardColumns>
            <Modal isOpen = {this.state.modalOpen}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);