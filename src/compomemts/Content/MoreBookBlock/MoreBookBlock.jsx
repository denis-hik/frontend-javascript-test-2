import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

import style from './MoreBookBlock.module.css';

const MoreBookBlock = (props) => {

    return (
        <Container>
            <Row>
                <Col>
                    <Button className={style.button} onClick={props.onClick} variant="primary">Больше</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default MoreBookBlock;