import React from 'react';
import { Card, CardImg,CardBody,CardTitle, Col } from "reactstrap";

function Character(props) {
    return(

                <Col sm="4">
            <Card>
                <CardImg src={props.c.image}/>
            <CardBody>
                <CardTitle>{props.c.name}</CardTitle>
            </CardBody>
                    </Card>
                </Col>


    )

}

export default Character;