import { Button, Card, Col, Row } from 'react-bootstrap'
import { CheckCircle, PencilSquare, Trash } from "react-bootstrap-icons";
import './TodoItem.css';

const TodoItem = (props) => {
    return (
      <>
        <Card className={`mb-3 w-75 text-center ${props.completed && "backgroundCheckActive"}`}>
            <Card.Body className='shadow'>
                <Row>
                    <Col md="2">
                        <CheckCircle 
                            size={30} 
                            className={`mb-3 hoverCheck ${props.completed && "CheckActive"}`} 
                            onClick ={props.onCompleted}
                            /> 
                    </Col>
                    <Col md="7" className='mb-3'> 
                            <p className={`text ${props.completed && "textCheckActive"}`}>{props.text}</p>

                    </Col>
                    <Col md="3">
                        <Button variant='success' className='me-3 gato'>
                            <PencilSquare />
                        </Button>
                        <Button variant='danger' className='me-3 gato' onClick={props.delete}>
                            <Trash />
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
      </>
    );
  }

  export { TodoItem }