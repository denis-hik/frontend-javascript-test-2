import React from "react";
import {Button, Card} from "react-bootstrap";
import style from './BookItem.module.css';

const BookItem = ({key, image = "", title = '', athor = '', tag = ''}) => {

    return (
        <Card id={key} className={style.body}>
            <Card.Img id={key + '_img'} variant="top" height={'100%'} src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {athor}
                </Card.Text>
                <Card.Subtitle>
                    {tag}
                </Card.Subtitle>
                <Button variant="primary">Подробнее</Button>
            </Card.Body>
        </Card>
    )
};

export default BookItem;