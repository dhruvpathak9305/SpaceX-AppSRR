import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../actions/launches";
import { Helmet } from "react-helmet";
import LaunchCard from "../components/LaunchCard";
import styled from "styled-components";
import Filters from "../components/Filters";

const HomeDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color:#F2F2F2;
`;

const LaunchesDiv = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-row-gap: 10px;
  grid-column-gap: 15px;
  background-color: #F2F2F2;
  justify-items: center;
`;

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchLaunches();
  }

  renderLaunches() {
    return this.props.launches.map((launch, index) => {
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
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.launches.length} Launches Loaded`}</title>
        <meta property="og:title" content="Launches App" />
      </Helmet>
    );
  }
  
  render() {
    return (
      <div>
        {this.head()}
        <HomeDiv>
          <Filters />
          <LaunchesDiv>{this.renderLaunches()}</LaunchesDiv>
        </HomeDiv>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { launches: state.launches };
}

function loadData(store) {
  return store.dispatch(fetchLaunches());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchLaunches })(HomePage),
};
