import React from 'react';
import { Card, CardText, CardImg, Row, Col } from 'reactstrap';
import './CombinationComponent.scss'
function Combination(props) {
    const myCombination = props.combinations.map(item => {
        return (
        <Col key={item.id} xs={{size:4}}>
            <Card>
            {/* <a href={item.link}> */}
            <a href={item.trait.jpgStoreLink}>
                <CardImg src={item.trait.image} alt={item.trait.altText}></CardImg>
            </a>
            {/* </a> */}
                <CardText className="card-title">
                    {item.trait.name}
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