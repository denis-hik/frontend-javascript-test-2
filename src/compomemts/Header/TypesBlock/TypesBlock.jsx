import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {configUi} from "../../../configs/config-ui";

const TypesBlock = (props) => {

    return (
        <Container>
            <Row>
                <Col>Categories:
                    <Form.Select size="sm">
                        {
                            configUi.categoriesList.map((data) => (
                                <option>{data}</option>
                            ))
                        }
                    </Form.Select>

                </Col>
                <Col>Sorting by:
                    <Form.Select size="sm">
                        {
                            configUi.sortList.map((data) => (
                                <option>{data}</option>
                            ))
                        }
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    )
};

export default TypesBlock;