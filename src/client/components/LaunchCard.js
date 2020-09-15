import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: max-content;
  height: max-content;
  text-align: center;
  background-color: white;
  border-radius: 2px;
  padding: 10px;
  margin: 2px;
  img {
    width: 150px;
    height: auto;
    background-color: #f2f2f2;
  }
  h3 {
    color: #4c5383;
    font-weight: bold;
    text-align: start;
  }

  h3:not(:first-of-type) {
    color: black;

    margin: 5px;
    /* display:inline-block; */
  }
  span {
    color: red;
    font-size: 15px;
    font-weight: 400;
    text-align: start;
  }
`;

function LaunchCard({
  index = "0",
  mission_name = "",
  mission_id = "",
  launch_year = "",
  launch_success = "",
  land_success = "",
  img = "",
  img_small = "",
}) {
  return (
    <Card>
      <img src={img} alt="" />

      <h3>{`${mission_name} #${index + 1}`}</h3>

      <h3>Mission Ids</h3>
      <span>{` * ${mission_id}`}</span>

      <h3>
        {`Launch Year  `}
        <span>{launch_year}</span>
      </h3>

      <h3>
        {`Successful Launch  `}
        <span>{launch_success}</span>
      </h3>

      <h3>
        {`Successful Landing  `}
        <span>{land_success}</span>
      </h3>
    </Card>
  );
}

export default LaunchCard;

// {
//   mission_name = "",
//   mission_id = "",
//   launch_year = "",
//   launch_success = "",
//   land_success = "",
// }

// {`
//       ${index}
//       ${mission_name}
//       ${mission_id}
//       ${launch_year}
//       ${launch_success}
//       ${land_success}
//       ${img}
//       ${img_small}
// `}
