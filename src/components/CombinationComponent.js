import React from "react";
import { Card, CardText, CardImg, Row, Col } from "reactstrap";

function Combination(props) {
  const myCombination = props.combinations.map((item) => {
    return (
      <Row className="card-row" key={item.id}>
        <Col xs={{ size: 1 }}>
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
                  <CardImg
                    src={traitItem.image}
                    alt={traitItem.altText}
                  ></CardImg>
                  <CardText>{traitItem.name}</CardText>
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
      <Row className="card-row">{myCombination}</Row>
    </>
  );
}

export default Combination;
