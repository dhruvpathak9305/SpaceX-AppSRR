import React from "react";
import styled from "styled-components";

const A = styled.a`
  /* width: 150px; */
  color: black;
  background-color: #c5e09a;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

function Button({ content }) {
  return <A>{content}</A>;
}

export default Button;
