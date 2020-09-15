import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import setYearFilter from "../actions/filters";
import { Link } from "react-router-dom";

const FilterDiv = styled.div`
  background-color: white;
  text-align: center;
  padding: 10px;
  height: fit-content;

  h2 {
    text-align: start;
    margin: 0px;
  }

  h3 {
    color: black;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
    display: inline-block;
    margin: 0px;
  }
`;

const Span = styled.span`
  color: black;
  background-color: #c5e09a;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const FilterSubDiv = styled.div`
  background-color: white;
  padding: 15px 0px;
  margin: 0 auto;
  display: grid;
  grid-auto-rows: 30px;
  grid-template-columns: repeat(2, min-content);
  grid-auto-flow: row dense;
  grid-row-gap: 8px;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  text-decoration: none;
`;

function Filters() {
  const SuccessFilter = ["True", "False"];

  return (
    <FilterDiv>
      <h2>Filters</h2>
      <h3>Launch Year</h3>
      <FilterSubDiv>
        {[...Array(15)].map((x, i) => (
          <Span key={i}>
            <Link to={`/launches?launch_year=${i + 2006}`}>{i + 2006}</Link>
          </Span>
        ))}
      </FilterSubDiv>

      <h3>Successful Launch</h3>
      <FilterSubDiv>
        {SuccessFilter.map((filter, i) => (
          <Span key={i}>
            <Link to="/launches=success">{filter}</Link>
          </Span>
        ))}
      </FilterSubDiv>

      <h3>Successful Landing</h3>
      <FilterSubDiv>
        {SuccessFilter.map((filter, i) => (
          <Span key={i}>
            <Link to="/landing=success">{filter}</Link>
          </Span>
        ))}
      </FilterSubDiv>
    </FilterDiv>
  );
}

export default Filters;
