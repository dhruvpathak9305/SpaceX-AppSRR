import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.h1`
font-size:40px;
font-weight;600;
`;
export default () => {
  return (
    <div>
      <Link to="/">React SSR</Link>
      <Link to="/launches">Launches</Link>
      <h1>SpaceX Launch Programs</h1>
    </div>
  );
};
