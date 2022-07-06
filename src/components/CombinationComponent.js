import React from "react";
import { Card, CardText, CardImg, Row, Col, Container } from "reactstrap";

function Combination(props) {
  const myCombination = props.combinations.map((item) => {
    return (
      <Row className="title-row" key={item.id}>
        <Col className="title-column" xs={{ size: 1 }}>
          <h3 className="title-text">{item.title}</h3>
        </Col>
        <div className="traits">
        {item.trait.map((traitItem) => {
          return (
            <div
              className="card-column"
              key={traitItem.traitId}
            >
              <a className="trait-link" href={traitItem.jpgStoreLink}>
                <Card>
                    <Row>
                  {traitItem.image && <CardImg
                    src={traitItem.image}
                    alt={traitItem.altText}
                  ></CardImg>}
                  </Row>
                  <Row>
                  <CardText className="trait-text">{traitItem.name}</CardText>
                  </Row>
                </Card>
              </a>
            </div>
          );
        })}
        </div>
        <Col className="title-column" xs={{ size: 1 }}>
            <Container className="token-container">
            <Col xs={{size: 12 }} className="token-row">
          <h3 className="title-text">{item.tokens + " sin tokens"}</h3>
          </Col>
          <Col xs={{size: 12 }} className="token-row">
            {/* earring is an image placeholder until I get the token image.*/}
          <img className="token-image" alt="placeholder sin token" src="images/earring/cardano-bling.png"></img>
          </Col>
          </Container>
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
