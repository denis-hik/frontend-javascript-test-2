import React from "react";
import {Button, Card} from "react-bootstrap";
import style from './BookItem.module.css';

const BookItem = ({image = false, title = 'Не обозвана', text = ''}) => {

    return (
        <Card className={style.body}>
            <Card.Img variant="top"  src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary">Читать</Button>
            </Card.Body>
        </Card>
    )
};

export default BookItem;