import '../BuiltWorkout.css';


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PlainButton from './PlainButton';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export default function BuiltWorkout({name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard2-pulse" viewBox="0 0 16 16">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
  <path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z"/>
</svg>
    </Button>
    


    <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Workout ({props.cartData.length})</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

             {props.cartData.map((item) => {
              return (<Card style={{ width: '18rem' }} className="menu-list">
      <ListGroup variant="flush">
        <ListGroup.Item className="fw-bold">{item.name} <span className="inline-text subtext fw-normal fst-italic grey">Burns {item.caloriesBurned} calories</span>
        </ListGroup.Item>
        <ListGroup.Item><span className="red subtext" onClick={() => props.remItem(item)}>Delete &#x2716;</span></ListGroup.Item>
      </ListGroup>
    </Card>)

            })} 
          </Offcanvas.Body>
          <Offcanvas.Body>
          This workout will burn <span className="fw-bold">{props.totCalories}</span> calories.
          </Offcanvas.Body>
          <Offcanvas.Body>
          <Button variant="primary" className="fw-bold">Get started!</Button>
          </Offcanvas.Body>
        
        
      </Offcanvas>
    </>
  );
}