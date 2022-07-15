import React from "react";
import { Card, CardText, CardImg, Row, Col, Container } from "reactstrap";

function Combination(props) {
  const myCombination = props.combinations.map((item) => {
    return (
      <Row className="title-row" key={item.id}>
        <Col className={item.backgroundImg} xs={{ size: 1 }}>
          <h3 className="title-text">{item.title}</h3>
        </Col>
        <div className="traits">
        {item.trait.map((traitItem) => {
          return (
            <div
              className="card-column"
              key={traitItem.traitId}
            >
              <a className="trait-link" name={item.title} href={traitItem.jpgStoreLink}>
                <Card>
                    <Row>
                  {traitItem.image && <CardImg
                    src={traitItem.image}
                    alt={traitItem.altText}
                  ></CardImg>}
                  </Row>
                  <Row>
                    <a className="role-title-link" href={`#${item.title}`} alt="role title">
                  <CardText className="trait-text">{traitItem.name}</CardText>
                  </a>
                  </Row>
                </Card>
              </a>
            </div>
          );
        })}
        </div>
        <Col className={item.backgroundImg} xs={{ size: 1 }}>
            <Container className="token-container">
            <Col xs={{size: 12 }} className="token-row">
          <h3 className="title-text">{item.tokens + " sin tokens"}</h3>
          </Col>
          <Col xs={{size: 12 }} className="token-row">
          <img className="token-image" alt="sin token" src="images/extras/token.png"></img>
          </Col>
          </Container>
        </Col>
      </Row>
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
