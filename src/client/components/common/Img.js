import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

function Img({ content }) {
  return <Img src={content}/>;
}

export default Img;
