import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {configUi} from "../../../configs/config-ui";

const TypesBlock = (props) => {

    return (
        <Container style={{color: 'white'}}>
            <Row>
                <Col>Categories:
                    <Form.Select onChange={(e) => props.onFilter(e.target.value)} size="sm">
                        {
                            configUi.categoriesList.map((data) => (
                                <option key={data + '_key'} value={data}>{data}</option>
                            ))
                        }
                    </Form.Select>

                </Col>
                <Col>Sorting by:
                    <Form.Select onChange={(e) => props.onSort(e.target.value)} size="sm">
                        {
                            configUi.sortList.map((data) => (
                                <option key={data + '_key'}>{data}</option>
                            ))
                        }
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    )
};

export default TypesBlock;