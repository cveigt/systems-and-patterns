import React from "react";
import styled from "styled-components";

const CardContainer = styled.figure``;
const CardImage = styled.img``;
const Caption = styled.figcaption``;

function Card(props) {
  return (
    <CardContainer>
      <h1>Card</h1>
      <CardImage src={props.img} alt={props.alt} />
      <Caption>{props.caption}</Caption>
    </CardContainer>
  );
}

export default Card;
