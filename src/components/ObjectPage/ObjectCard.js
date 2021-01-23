import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

//{ categorys, gallerys, user, id }
const ObjectCard = ({ id, X, Y, user, categorys, gallerys }) => {
  const category_list = categorys.join(', ')
  return (
    <Col className="py-2 d-flex justify-content-center">
      <Card style={{ width: '18rem', height: '24rem' }}>
        <Card.Img variant="top" src={gallerys[0]} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="card-title">{`Объект №${id}`}</Card.Title>
          <Card.Text className="card-text">
            {`${category_list}`}
          </Card.Text>
          <Button variant="primary">Редактировать</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ObjectCard;
