import React from 'react'
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'
import LoadComments from './LoadComments'

const DishDetailComponent = ({dish, comments}) => {
  return (
    <div>
      <Card className="my-2">
    <CardImg
      alt={dish.name}
      src= {dish.image}
      style={{
        height: '100%'
      }}
      top
      width="100%"
    />
    <CardBody style={{textAlign : "left",}}>
      <CardTitle tag="h5">
        {dish.name}
      </CardTitle>
      <CardText>
        <small className="text-muted">
          {dish.description}
          
          PRICE :{dish.price}/-
        </small>
        <hr>
        </hr>
        <LoadComments comments = {comments}/>
      </CardText>
    </CardBody>
  </Card>
    </div>
  )
}

export default DishDetailComponent