import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchLaunches } from "../actions/launches";

import LaunchCard from "../components/LaunchCard";
import styled from "styled-components";

function Launches({ launches = [] }) {
  return (
    <React.Fragment>
      {launches.map((launch, index) => {
        return (
          <LaunchCard
            key={launch.flight_number}
            index={index}
            mission_name={launch.mission_name}
            mission_id={launch.mission_id}
            launch_year={launch.launch_year}
            launch_success={launch.launch_success}
            land_success={launch.land_success}
            img={launch.img}
            img_small={launch.img_small}
          />
        );
      })}
    </React.Fragment>
  );
}
export default Launches;
