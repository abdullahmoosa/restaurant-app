import React, {useState} from 'react'
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap'

const MenuItemComponent = ({dish, onSelectDish}) => {    
    return (
        <div>
  <Card inverse style={{padding : 10, margin : 10, cursor : 'pointer'}} onClick={()=>onSelectDish(dish)} >
    <CardImg
      alt={dish.name}
      src={dish.image}
      style={{
        height: 270,
        opacity: 0.70
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5" style={
        {fontSize : '25px',
        fontWeight: 'bold',
        color : 'ThreeDDarkShadow'
    }
      }>
        {dish.name}
      </CardTitle>
      
    </CardImgOverlay>
  </Card>
</div>
    )
}

export default MenuItemComponent