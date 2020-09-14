import React, { useEffect } from "react";
import Button from "./common/Button";
import styled from "styled-components";

const FilterDiv = styled.div`
  background-color: #f2f2f2;
  text-align: center;
  padding: 10px;

  h2 {
    text-align: start;
  }

  h3:not(:first-of-type) {
    color: red;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
    display: inline-block;
  }
`;

const A = styled.a`
  color: black;
  background-color: #c5e09a;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const LaunchYearDiv = styled.div`
  background-color: red;
  padding: 15px 0px;
  margin: 0 auto;
  display: grid;
  grid-auto-rows: 30px;
  grid-template-columns: repeat(2, min-content);
  grid-auto-flow: row dense;
  grid-row-gap: 15px;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
`;

function Filters() {
  //   var yearButtons = [];
  //   for (let i = 2006; i <= 2020; i++) {
  //     yearButtons.push(<Button key={i} content={i} />);
  //   }
  function handleFilter({type,value}) {
    alert(type+value);
  }

  return (
    <FilterDiv>
      <h2>Filters</h2>
      <h3>Launch Year</h3>
      <LaunchYearDiv>
        {[...Array(15)].map((x, i) => (
          <A key={i} onClick={() => handleFilter({type:"year",value:i+2006,})}>{i+2006}</A>
        ))}
      </LaunchYearDiv>

      <h3>Successful Launch</h3>
      <LaunchYearDiv>
        <A onClick={() => handleFilter({type:"Launch",value:"True",})}>True</A>
        <A onClick={() => handleFilter({type:"Launch",value:"False",})}>False</A>
      </LaunchYearDiv>

      <h3>Successful Landing</h3>
      <LaunchYearDiv>
        <A onClick={() => handleFilter({type:"Landing",value:"True",})}>True</A>
        <A onClick={() => handleFilter({type:"Landing",value:"False",})}>False</A>
      </LaunchYearDiv>
    </FilterDiv>
  );
}

export default Filters;
