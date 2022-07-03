import React from "react";
import { Card, CardText, CardImg, Row, Col, Container } from "reactstrap";

function Combination(props) {
  const myCombination = props.combinations.map((item) => {
    return (
      <Row className="title-row" key={item.id}>
        <Col className="title-column" xs={{ size: 1 }}>
          <h3>{item.title}</h3>
        </Col>
        {item.trait.map((traitItem) => {
          return (
            <Col
              className="card-column"
              key={traitItem.traitId}
              xs={{ size: 1 }}
            >
              <a href={traitItem.jpgStoreLink}>
                <Card>
                    <Row>
                  <CardImg
                    src={traitItem.image}
                    alt={traitItem.altText}
                  ></CardImg>
                  </Row>
                  <Row>
                  <CardText>{traitItem.name}</CardText>
                  </Row>
                </Card>
              </a>
            </Col>
          );
        })}
        <Col xs={{ size: 1 }}>
          <h3>{item.tokens}</h3>
        </Col>
      </Row>
      
      // <Col key={item.id} xs={{size:4}}>
      //     <Card>
      //     {/* <a href={item.link}> */}
      //   <a href={item.trait.jpgStoreLink}>
      //       <CardImg src={item.trait.image} alt={item.trait.altText}></CardImg>
      //   </a>
      //     {/* </a> */}
      //         <CardText className="card-title">
      //             {item.trait.name}
      //         </CardText>
      //     </Card>
      // </Col>
    );
  });

  return (
    <>
    <Container>
      {myCombination}
    </Container>
    </>
  );
}

export default Combination;
