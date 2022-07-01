import React from 'react';
import { Card, CardText, CardImg, Row, Col } from 'reactstrap';
function Combination(props) {
    const myCombination = props.combinations.map(item => {
        return (
        <Col key={item.id} xs={{size:4}}>
            <Card>
            {/* <a href={item.link}> */}
                <CardImg onClick={() => {props.projectSelect(item.id)}} src={item.coverImg} alt={item.trait.altText}></CardImg>
            {/* </a> */}
                <CardText className="card-title">
                    {item.title}
                </CardText>
            </Card>
        </Col>
        )
    })
    return (
        <>
            <Row className="card-row">
                {myCombination}
            </Row>
        </>
    );
}

export default Combination;