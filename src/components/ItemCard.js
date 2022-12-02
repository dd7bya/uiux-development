import '../ItemCard.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export default function ItemCard(props) {

    return (
        <div className="ItemCard">
<Card style={{ width: '18rem' }}>
      <Card.Img className="image-thumb" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="fw-bold">{props.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Targets: <span className="fw-bold">{props.bodyPart}</span></ListGroup.Item>
        <ListGroup.Item>Burns: <span className="fw-bold">{props.caloriesBurned} calories</span></ListGroup.Item>
        <ListGroup.Item>Equipment<span className="fst-italic red">{props.optionalString}</span>: {props.equipmentString}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" className="fw-bold" onClick={() => props.addItem(props)}>Add to workout</Button>
      </Card.Body>
    </Card>
        </div>
       
    );
}