import React from 'react'
import DISHES from '../../data/dishes'
import { ListGroup, ListGroupItem, Card,CardHeader } from 'reactstrap'
import dateFormat, { masks } from "dateformat";


const LoadComments = ({comments}) => {
  let show_comments = comments.map((comment) => {
    return <div>
      <ListGroupItem>
        <h6>{comment.author}</h6>
        <p>{comment.comment}</p>
        <p>Rating : {comment.rating}</p>
        <b>{dateFormat(comment.date, 'dddd, mmmm d, yyyy')}</b>
        </ListGroupItem>
      </div>
  })
  return (
    <Card
  style={{
    width: '100%'
  }}
>
  <CardHeader>
    Comments
  </CardHeader>
  <ListGroup flush>
    {show_comments}
  </ListGroup>
</Card>
  )
}

export default LoadComments