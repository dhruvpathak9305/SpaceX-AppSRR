import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
font-size:30px;
font-weight;400;
margin:0px;
`;
export default () => {
  return (
    <div>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        exact
      >
        ReactSSR
      </NavLink>
      <Link to="/launches">Launches</Link>
      <H1>SpaceX Launch Programs</H1>
    </div>
  );
};
